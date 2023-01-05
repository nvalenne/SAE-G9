import {addContactInDB} from "../services/formulaire_contact.service.js";

export const formulaire_contactValidation = (req, res, next) => {
    let email = req.body.email;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    let message = req.body.message;
    console.log(email, nom, prenom, message);
    addContactInDB((err, formulaires) => {
        if (err) {
            console.error(err);
            res.status(400).send({success: 1, content: err});
        } else {
            let isValid = true;
            let errorMsg;
            if (!email || !nom || !prenom || !message){
                errorMsg = "Une des informations est manquante";
                isValid = false;
            }
            console.log("validated : " + isValid);
            if (!isValid){
                res.status(400).send({success:1, data:errorMsg});
            } else {
                next();
            }
        }
    });
}