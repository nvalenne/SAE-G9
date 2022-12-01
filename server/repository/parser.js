const AttractionRepository = require("./AttractionRepository");
const CompteRepository = require("./CompteRepository");
const EmplacementRepository = require("./EmplacementRepository");
const MenuRepository = require("./MenuRepository");
const PlacementARepository = require("./PlacementARepository");
const PlacementSRepository = require("./PlacementSRepository");
const ProduitRepository =require("./ProduitRepository");
const ProposeARepository = require("./ProposeARepository");
const ProposeSRepository = require("./ProposeSRepository");
const ServiceRepository = require("./ServiceRepository");
const StandRepository = require("./StandRepository");
const TypeAttractionRepository = require("./TypeAttractionRepository");
const TypeStandRepository = require("./TypeStandRepository");


class Parser{

    constructor(dao) {
        this.dao = dao;
        this.attraction = new AttractionRepository(dao);
        this.compte = new CompteRepository(dao);
        this.emplacement = new EmplacementRepository(dao);
        this.menu = new MenuRepository(dao);
        this.placementA = new PlacementARepository(dao);
        this.placementS = new PlacementSRepository(dao);
        this.produit =new ProduitRepository(dao);
        this.proposeA = new ProposeARepository(dao);
        this.proposeS = new ProposeSRepository(dao);
        this.service = new ServiceRepository(dao);
        this.stand = new StandRepository(dao);
        this.typeAttraction =new TypeAttractionRepository(dao);
        this.typeStand = new TypeStandRepository(dao);
    }

    async createTable(){
        await this.emplacement.createTable();
        await this.typeStand.createTable();
        await this.typeAttraction.createTable();
        await this.compte.createTable();
        await this.service.createTable();
        await this.produit.createTable();
        await this.attraction.createTable();
        await this.stand.createTable();
        await this.placementA.createTable();
        await this.placementS.createTable();
        await this.proposeA.createTable();
        await this.proposeS.createTable();
        await this.menu.createTable();
    }

    async dropTable(){
        let sql=`   DROP TABLE IF EXISTS MENU;
                    DROP TABLE IF EXISTS PROPOSES;
                    DROP TABLE IF EXISTS PROPOSEA;
                    DROP TABLE IF EXISTS PLACEMENTS;
                    DROP TABLE IF EXISTS PLACEMENTA;
                    DROP TABLE IF EXISTS STAND;
                    DROP TABLE IF EXISTS ATTRACTION;
                    DROP TABLE IF EXISTS PRODUIT;
                    DROP TABLE IF EXISTS SERVICE;
                    DROP TABLE IF EXISTS COMPTE;
                    DROP TABLE IF EXISTS TYPEATTRACTION;
                    DROP TABLE IF EXISTS TYPESTAND;
                    DROP TABLE IF EXISTS EMPLACEMENT;
                    `;

        return this.dao.run(sql, "DROP ALL TABLE");

    }

}

module.exports = Parser;