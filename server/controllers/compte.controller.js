import {addAccountInDB} from "../services/compte.service.js";
import bcrypt from "bcrypt";

export const createAccount = (req, res) => {
    let username = req.body.username;
    let mdp = req.body.password;
    let mail = req.body.mail;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    bcrypt.hash(mdp, 10, (err, hash) => {
        if (err) {
            res.status(400).send({success:1, data: err});
        } else {
            //console.log(username, mdp, mail, nom, prenom);
            addAccountInDB(username, hash, mail, nom, prenom, (err, result) => {
                if (err) {
                    console.error(err)
                    res.status(400).send({success: 1, content: err})
                } else {
                    res.status(200).send({success: 0, content: `Utilisateur ajouté : ${result}`});
                }
            });
        }
    });
}

export const authentificate = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log("Créaton du cookie...");
}