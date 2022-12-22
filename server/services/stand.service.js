import db from "../models/index.js";
export const getAllStands = async (callback) => {
    try {
        const result = await db.stand.findAll();
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const getByID = async (id, callback) => {
    try {
        const result = await db.stand.findAll({
            where:{
                id_stand: id
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}