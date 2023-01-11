import db from "../models/index.js";
export const AllBillets = async (callback) => {
    try {
        const result = await db.billet.findAll({
            include: [
                {
                    model: db.compte,
                }
                ,{
                    model: db.attraction
                }
            ],

        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const BilletsByIDCompte = async (id, callback) => {
    try {
        const result = await db.billet.findAll({
            where:{
                id_compte: id
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const Billet = async (date,prix,id_compte,id_attraction, callback) => {
    try {
        const billet = await db.billet.create({
            date_billet: date,
            prix: prix,
            id_compte: id_compte,
            id_attraction: id_attraction,
        });
        return callback(null, billet.dataValues);
    } catch (e){
        return callback(e, []);
    }
}