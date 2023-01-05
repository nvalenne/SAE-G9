import {addContactInDB} from "../services/formulaire_contact.service.js";

export const createFormulaire = (req, res) => {
    let message = req.body.message;
    let email = req.body.email;
    let nom =  req.body.nom;
    console.log("ca marche");
    let prenom = req.body.prenom;
    addContactInDB(message, email, nom, prenom, (err, result) => {
        if (err) {
            console.error(err)
                    res.status(400).send({success: 1, content: err})
        } else {
            res.status(200).send({success: 0, content: `Formulaire ajouté : ${result}`});
        }
    });
}
