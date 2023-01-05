import express from 'express';
import {formulaire_contactValidation} from "../middlewares/formulaire_contact-validation.js";
import {createFormulaire} from "../controllers/formulaire_contact.controller.js";

let formulaire_router = express.Router();

formulaire_router.post("/",formulaire_contactValidation, createFormulaire)

export default formulaire_router;