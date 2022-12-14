import {addAccountInDB, getAllAccounts} from "../services/compte.service.js";

export const createAccount = (req, res) => {
    let username = "salut" //req.body.username;
    let mdp = "password"//req.body.password;
    let mail = "mathan@reuc.fr" //req.body.mail;
    let nom =  "nathna"//req.body.nom;
    let prenom = "truc"//req.body.prenom;

    getAllAccounts((err, users) => {
        if (err) {
            res.status(400).send({success: 1, content: err});
        } else {
            let isValid = true;
            if (!username || !mdp || !mail || !nom || !prenom) isValid = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i].mail === mail || users[i].username === username){
                    isValid = false;
                    console.log("Utilisateur déja inscrit");
                    break;
                }
            }
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