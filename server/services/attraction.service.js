import db from "../models/index.js";
export const getAllAttractions = async (callback) => {
    try {
        const result = await db.attraction.findAll({
            include: [
                {
                model: db.compte,
                }
                ,{
                model: db.type_attraction
                }
            ],

        });
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

export const getTypeOfAnAttraction = async (id, callback) => {
    try {
        const result = await db.type_attraction.findAll({
            where: {
                id_type_attraction: id
            }
        });
        return callback(null, result);
    } catch (e) {
        return callback(e, []);
    }
}