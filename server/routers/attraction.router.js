import express from "express";
import {getAttractions, getAttractionByID, getTypeAttractionByID} from "../controllers/attraction.controller.js";
let attraction_router = express.Router();

attraction_router.get("/", getAttractions);
attraction_router.get("/:id", getAttractionByID);
attraction_router.get("/types_attraction/", getTypeAttractionByID);

export default attraction_router;