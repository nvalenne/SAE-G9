import express from 'express';
import {formulaire_contactValidation} from "../middlewares/formulaire_contact-validation.js";
import {createAvisLivreOr, createFormulaireContact, getLivreOr} from "../controllers/formulaire.controller.js";
import {createAttraction} from "../controllers/attraction.controller.js";

let formulaire_router = express.Router();

formulaire_router.post("/contact",formulaire_contactValidation, createFormulaireContact);
formulaire_router.get('/avis-livre-d-or', getLivreOr);
formulaire_router.post("/avis-livre-d-or", createAvisLivreOr);
formulaire_router.post("/inscription-manège", createAttraction)

export default formulaire_router;