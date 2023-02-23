import db from "../models/index.js";
export const AllBillets = async (callback) => {
    try {
        const result = await db.billet.findAll({
            include: [
                {
                    model: db.compte,
                }
                ,{
                    model: db.attraction
                }
            ],

        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const BilletsByIDCompte = async (id, callback) => {
    try {
        const result = await db.billet.findAll({
            where:{
                id_compte: id
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const create_b = async (id_compte,id_attraction, callback) => {
    try {
        let attraction = await (db.attraction.findByPk(id_attraction));
        const billet = await db.billet.create({
            date_billet: Date.now(),
            prix: attraction.prix_adulte,
            id_compte: id_compte,
            id_attraction: id_attraction,
        });
        return callback(null, billet.dataValues);
    } catch (e){
        return callback(e, []);
    }
}

export const delete_b = async (id, callback) => {
    try {
        const billet_deleted = await db.billet.destroy({
            where: {
                id_billet: id
            }
        })
        return callback(null, billet_deleted)
    } catch (e) {
        return callback(e, "Echec de la suppression du billet")
    }
}