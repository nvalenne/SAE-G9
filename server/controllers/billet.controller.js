import {AllBillets, BilletsByIDCompte, create_b, delete_b} from "../services/billet.service.js";

export const getAllBillets = (req, res) =>{
    AllBillets((error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    })
}

export const getBilletsByIDCompte = (req, res) => {
    let id_compte = req.params.id;
    BilletsByIDCompte(id_compte, (error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    })
}

export const postBillet = (req, res) => {
    let id_compte = req.params.id;
    let id_attraction = req.body.id_attraction;
    create_b(id_compte,id_attraction, (error, result) => {
        if (error){
            console.error(error);
            res.status(400).send({success:1, content: error});
        } else {
            console.log(result);
            res.status(200).send(result)
        }
    })
}

export const deleteBillet = (req, res) => {
    let id_billet = req.params.id;
    delete_b(id_billet, (error, result) => {
        if (error) {
            console.error(error)
            res.status(400).send({success:1, content:"Echec de la suppression du billet", err:error})
        } else {
            console.log(result)
            if (result == 0){
                res.status(404).send({success:1, content:"Ce billet n'existe pas"})
            } else {
                res.status(200).send({success:0, content:"Billet supprimé avec succès"})
            }
        }
    })

}