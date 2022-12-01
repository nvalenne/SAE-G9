const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//BDD
const AppDao = require("./dao");
const Parser = require("./repository/parser");

global.dao = new AppDao();
global.parser = new Parser(dao);

//

const port = process.env.PORT;
const app = express();



app.listen(port, () => {
    console.log(`Listening on port ${port}` );
    parser.dropTable().then(()=>{
        parser.createTable().then(()=>{
            console.log("ALL TABLES OK");
        })
    });

});
