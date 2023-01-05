import db from "../models/index.js";
export const addContactInDB = async (email, nom, prenom, message, callback) => {
    try {
        const formulaire = await db.formulaire_contact.create({
            email: email,
            nom: nom,
            prenom: prenom,
            message: message
        });
        return callback(null, formulaire);
    } catch (e){
        return callback(e, []);
    }
}
