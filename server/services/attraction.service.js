import db from "../models/index.js";
export const getAllAttractions = async (callback) => {
    try {
        const result = await db.attraction.findAll();
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const getByID = async (id, callback) => {
    try {
        const result = await db.attraction.findAll({
            where:{
                id_attraction: id
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}