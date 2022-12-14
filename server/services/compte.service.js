import db from "../models/index.js";
export const addAccountInDB = async (username, password, mail, nom, prenom, callback) => {
    try {
        const user = await db.compte.create({
            username: username,
            password: password,
            mail: mail,
            nom: nom,
            role: 'utilisateur',
            prenom: prenom
        });
        return callback(null, user);
    } catch (e){
        return callback(e, []);
    }
}

export const getAllAccounts = async (callback) => {
    try {
        const users = await db.compte.findAll();
        return callback(null, users);
    } catch (e) {
        return callback((e, []));
    }
}

