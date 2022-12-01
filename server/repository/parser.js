const AttractionRepository = require("AttractionRepository");
const CompteRepository = require("CompteRepository");
const EmplacementRepository = require("EmplacementRepository");
const MenuRepository = require("MenuRepository");
const PlacementARepository = require("PlacementARepository");
const PlacementSRepository = require("PlacementSRepository");
const ProduitRepository =require("ProduitRepository");
const ProposeARepository = require("ProposeARepository");
const ProposeSRepository = require("ProposeSRepository");
const ServiceRepository = require("ServiceRepository");
const StandRepository = require("StandRepository");
const TypeAttractionRepository = require("TypeAttractionRepository");
const TypeStandRepository = require("TypeStandRepository");


class Parser{

    constructor(dao) {
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
        this.standRepository = new StandRepository(dao);
        this.typeAttraction =new TypeAttractionRepository(dao);
        this.typeStand = new TypeStandRepository(dao);
    }

}

module.exports = Parser;