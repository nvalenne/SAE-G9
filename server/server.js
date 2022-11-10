import express from "express";
import {default as client} from "./models/db.config.js"

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const query = `SELECT * from Compte`;
client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
});

app.listen(port, () => {
    console.log(`Listens on port ${port}`);
});
