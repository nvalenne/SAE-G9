import express from 'express';
import {authentificate, createAccount} from "../controllers/compte.controller.js";

let compte_router = express.Router();

compte_router.post("/connexion", authentificate)
compte_router.post("/inscription", createAccount);

export default compte_router;