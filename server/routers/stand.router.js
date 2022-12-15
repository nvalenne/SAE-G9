import express from "express";
import {getStands,getStandByID} from "../controllers/stand.controller.js";
let stand_router = express.Router();

stand_router.get("/", getStands);
stand_router.get("/:id", getStandByID);

export default stand_router;