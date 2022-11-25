import express from "express";
import dotenv from "dotenv";
import {AppDAO} from "./dao.js";
dotenv.config();

const port = process.env.PORT;
const app = express();
global.dao = new AppDAO();
global.prizesRepo = new PrizesRepository(dao);


app.listen(port, () => {
    console.log(`Listening on port ${port}` );
});
