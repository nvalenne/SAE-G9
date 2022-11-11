import express from "express";
import {client, sequelize} from "./models/db.config.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.NODE_PORT;
const app = express();

/*
*   EXEMPLE REQUETE SELECT
*
*
client.query(`SELECT * from Compte`, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res.rows);
    client.end();
});
*/

app.listen(port, () => {
    client.connect(function(err) {
        if (err) throw err;
        console.log("Database Connected!");
    });
    console.log(`Listening on port ${port}`);
});
