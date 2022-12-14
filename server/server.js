import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Routers
import prestataire_router from "./routers/prestataire.router.js";
import attraction_router from "./routers/attraction.router.js";
//


//BDD
import db from "./models/index.js";
//

const port = process.env.PORT;
const app = express();

app.use("/prestataires", prestataire_router);
app.use("/attractions", attraction_router);


try {
    await db.sequelize.authenticate()
}catch (e) {
    console.error(e);
}
app.listen(port, () => {
    console.log(`Listening on port ${port}` );
    db.sequelize.sync().then(r => console.log("yeah"));

});
