import express from 'express'
let router = express.Router();

// pages pour le public
router.get("/", page_accueil);
router.get("/connexion", page_connexion);
router.get("/map", carte_interactive);
router.get("/contact", contact);

//pages pour les prestataires
router.get("/:id/infos", page_infos);
router.post("/:id/infos", save_data);

//pages pour l'organisateur

