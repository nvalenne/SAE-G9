const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//BDD
const AppDao = require("./dao");
const AttractionRepository = require("./repository/AttractionRepository");

global.dao = new AppDao();
global.prizesRepo = new AttractionRepository(dao);

//

const port = process.env.PORT;
const app = express();



app.listen(port, () => {
    console.log(`Listening on port ${port}` );
});
