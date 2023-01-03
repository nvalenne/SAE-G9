import express from 'express';
import {authentificate, createAccount} from "../controllers/compte.controller.js";
import {authentificateValidation} from "../middlewares/authentificate-validation.js";
import {inscriptionValidation} from "../middlewares/inscription-validation.js";

let compte_router = express.Router();


compte_router.post("/connexion",authentificateValidation, authentificate)
compte_router.post("/inscription", inscriptionValidation, createAccount);

export default compte_router;