import {addContactInDB} from "../services/formulaire.service.js";

export const createFormulaireContact = (req, res) => {
    let message = req.body.message;
    let email = req.body.email;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    console.log("ca marche");
    addContactInDB(email, nom, prenom, message, (err, result) => {
        if (err) {
            console.error(err);
            res.status(400).send({success: 1, content: err})
        } else {
            res.status(200).send({success: 0, content: `Formulaire ajouté : ${result}`});
        }
    });
}

export const createAvisLivreOr = (req, res) => {

}
