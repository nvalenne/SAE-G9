import express from "express";
import {
    getAttractions,
    getAttractionByID,
    getTypeAttractionByID,
    updateAttraction
} from "../controllers/attraction.controller.js";
let attraction_router = express.Router();

/**
 * @swagger
 * /attractions:
 *  get:
 *      summary: Obtains all attractions
 *      tags:
 *          - Attractions
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description: Bad Request
 */
attraction_router.get("/", getAttractions);

/**
 * @swagger
 * /attractions/{id}:
 *  get:
 *      summary: Obtains attraction depending on his id
 *      parameters:
 *             - in: path
 *               name: id
 *               type: integer
 *               required: true
 *      tags:
 *          - Attractions
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description: Bad Request
 */
attraction_router.get("/:id", getAttractionByID);

/**
 * @swagger
 * /attractions/types_attraction/{id}:
 *  get:
 *      summary: Obtains types
 *      parameters:
 *             - in: path
 *               name: id
 *               type: integer
 *               required: true
 *      tags:
 *          - Attractions
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description: Bad Request
 */
attraction_router.get("/types_attraction/:id", getTypeAttractionByID);

/**
 * @swagger
 * /attractions:
 *  put:
 *      summary: Update values of an attraction
 *      parameters:
 *             - in: body
 *               name: attraction
 *               description: The user to create.
 *               schema:
 *                  type: object
 *                  required:
 *                     - id
 *                     - nom
 *                     - prix_enfant
 *                     - prix_adulte
 *                     - taille_requise
 *                  properties:
 *                     id:
 *                        type: integer
 *                     nom:
 *                        type: string
 *                     prix_enfant:
 *                        type: number
 *                        format: float
 *                     prix_adulte:
 *                        type: number
 *                        format: float
 *                     taille_requise:
 *                        type: number
 *                        format: float
 *      tags:
 *          - Attractions
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description: Bad Request
 */
attraction_router.put("/", updateAttraction);

export default attraction_router;