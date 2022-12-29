import {addAccountInDB, getAllAccounts} from "../services/compte.service.js";
import bcrypt from "bcrypt";

export const createAccount = (req, res) => {
    let username = req.body.username;
    let mdp = req.body.password;
    let mail = req.body.mail;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    getAllAccounts((err, users) => {
        if (err) {
            console.error(err);
            res.status(400).send({success: 1, content: err});
        } else {
            let isValid = true;
            if (!username || !mdp || !mail || !nom || !prenom){
                console.log("non défini");
                isValid = false;
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i].mail === mail || users[i].username === username){
                    isValid = false;
                    console.log("Utilisateur déja inscrit");
                    break;
                }
            }
            console.log(isValid);
            if (isValid === false){
                console.log("Validation pas passé")
                res.status(400).send({success:1, data:"error validation"});
            } else {
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
                        }).then( r => console.log(r))
                    }
                });
            }
        }
    }); // CALLBACK HELL --> A REGLER
}

export const authentificate = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    getAllAccounts((err, users) => {
        if (err) {
            console.log(err)
            res.status(400).send({success: 1, data: err});
        } else {
            let user = users.find(user => user.username === username);
            if (user.length === 0) res.status(404).send({success: 1, data: "Utilisateur non trouvé"});
            bcrypt.compare(password, user.password, (errCompare, result) => {
                console.log(result);
                if (errCompare) {
                    console.log(errCompare);
                    res.status(400).send({success: 1, data: errCompare})
                } else {
                    if (!result) res.status(400).send({success: 1, data: "Mot de passe incorrect"});
                    else {
                        console.log("ça marche");
                        //appel du service authentification (création du cookie)
                    }
                }
            });
        }
    })
}