import express from 'express'
import main_Controller from '../controllers/main_controller'
let router = express.Router();


// pages pour le public
router.get("/", main_Controller.page_accueil);
router.get("/connexion", main_Controller.page_connexion);
router.get("/map", main_Controller.carte_interactive);
router.get("/contact", main_Controller.contact);

//pages pour les prestataires
router.get("/:id/infos", main_Controller.page_infos);
router.post("/:id/infos", main_Controller.save_data);

//pages pour l'organisateur

//test
router.get("/test",main_Controller.test);

