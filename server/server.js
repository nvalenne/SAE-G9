const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routers/main_router");

dotenv.config();

//BDD
const AppDao = require("./dao");
const Parser = require("./repository/parser");

global.dao = new AppDao();
global.parser = new Parser(dao);

//

const port = process.env.PORT;
const app = express();

app.use("/", routes);


app.listen(port, () => {
    console.log(`Listening on port ${port}` );
    parser.dropTable().then(()=>{
        parser.createTable().then(()=>{
            parser.initTables();
            console.log("ALL TABLES OK");
        })
    });

});
