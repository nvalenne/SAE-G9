import {getAllAccounts} from "../services/compte.service.js";
import bcrypt from "bcrypt";

export const authentificateValidation = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let isValid = true;
    getAllAccounts((err, users) => {
        if (err) {
            console.log(err)
            res.status(400).send({success: 1, data: err});
        } else {
            let user = users.find(user => user.username === username);
            if (user.length === 0) isValid = false;
            bcrypt.compare(password, user.password, (errCompare, result) => {
                console.log("same : " + result);
                if (errCompare) {
                    console.log(errCompare);
                    isValid = false;
                }
            });
            if (!isValid) {
                res.status(404).send({success:1, data: "Nom d'utilisateur ou mot de passe incorrect"});
            } else {
                next();
            }
        }
    })
}