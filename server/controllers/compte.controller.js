import {addAccountInDB, getAllAccounts} from "../services/compte.service.js";

export const createAccount = (req, res) => {
    let username = req.body.username;
    let mdp = req.body.password;
    let mail = req.body.mail;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    getAllAccounts((err, users) => {
        if (err) {
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
                res.status(400).send({success:1, data:"error validation"});
            } else {
                console.log(username, mdp, mail, nom, prenom);
                addAccountInDB(username, mdp, mail, nom, prenom, (err, result) => {
                    if (err) {
                        res.send({success: 1, content: err})
                    } else {
                        res.send({success: 0, content: `Utilisateur ajouté : ${result}`});
                    }
                }).then( r => console.log(r))
            }
        }
    });
}