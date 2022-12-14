import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,{
    dialect: 'postgres',
    port: 5432,
    host: process.env.DB_HOST
});

const db = {sequelize, Sequelize}

import {Compte} from "./compte.model.js";
db.compte = Compte(sequelize);
import {Attraction} from "./attraction.model.js";
db.attraction = Attraction(sequelize);
import {Stand} from "./stand.model.js";
db.stand = Stand(sequelize);
import {Produit} from "./produit.model.js";
db.produit = Produit(sequelize);
import {Service} from "./service.model.js";
db.service = Service(sequelize);
import {Emplacement} from "./emplacement.model.js";
db.emplacement = Emplacement(sequelize);
import {TypeAttraction} from "./typeAttraction.model.js";
db.type_attraction = TypeAttraction(sequelize);
import {TypeStand} from "./typeStand.model.js";
db.type_stand = TypeStand(sequelize);
import {AvisStand} from "./avis_stand.model.js";
db.avis_stand = AvisStand(sequelize);
import {AvisAttraction} from "./avis_attraction.model.js";
db.avis_attraction = AvisAttraction(sequelize);
import {Billet} from "./billet.model.js";
db.billet = Billet(sequelize);

//
// Relations
//


// Relation entre attraction et compte
db.compte.hasMany(db.attraction,{foreignKey:'idCompte'});
db.attraction.belongsTo(db.compte, {foreignKey:'idCompte'});

//Relation entre attraction et typeAttraction
db.type_attraction.hasMany(db.attraction, {foreignKey: 'idtypeattraction'})
db.attraction.belongsTo(db.type_attraction, {foreignKey:'idtypeattraction'})

//Relation entre stand et typeStand
db.type_stand.hasMany(db.stand, {foreignKey:'idtypestand'});
db.stand.belongsTo(db.type_stand, {foreignKey:'idtypestand'});

//Relation entre stand et compte
db.compte.hasMany(db.stand, {foreignKey:'idCompte'});
db.stand.belongsTo(db.compte, {foreignKey:'idCompte'});

// Relation entre Compte et Billet
db.billet.belongsTo(db.compte, {foreignKey: 'id_compte'});
db.compte.hasMany(db.billet, {foreignKey: 'id_compte'});

// Relation entre Emplacement et Attraction
db.attraction.belongsTo(db.emplacement, {foreignKey: 'id_emplacement'});
db.emplacement.hasOne(db.attraction, {foreignKey:'id_emplacement'})

// Relation entre Emplacement et Stand
db.stand.belongsTo(db.emplacement, {foreignKey: 'id_emplacement'});
db.emplacement.hasOne(db.stand, {foreignKey: 'id_emplacement'});


//
//  Tables associatifs
//

// Association AvisAttraction entre Attraction et Compte
db.attraction.belongsToMany(db.compte, {through: db.avis_attraction});
db.compte.belongsToMany(db.attraction, {through: db.avis_attraction});

// Association AvisStand entre Stand et Compte
db.stand.belongsToMany(db.compte, {through: db.avis_stand});
db.compte.belongsToMany(db.stand, {through: db.avis_stand});

export default db;