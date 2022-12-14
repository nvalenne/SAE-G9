import express from "express";
import {getPrestataires, getPrestataireByID, createAccount}
    from "../controllers/prestataire.controller.js";
let prestataire_router = express.Router();

prestataire_router.get("/", getPrestataires);

prestataire_router.get("/:id", getPrestataireByID);

prestataire_router.post("/inscription", createAccount);

export default prestataire_router;

