import express from 'express';
import {formulaire_contactValidation} from "../middlewares/formulaire_contact-validation.js";
import {createFormulaireContact} from "../controllers/formulaire.controller.js";

let formulaire_router = express.Router();

formulaire_router.post("/contact",formulaire_contactValidation, createFormulaireContact);
formulaire_router.post("/avis-livre-d-or", )

export default formulaire_router;