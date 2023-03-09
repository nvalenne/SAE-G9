import {
    getAllAttractions,
    getByID,
    getTypeOfAnAttraction,
    updateAttractionById,
    insertAttraction
} from "../services/attraction.service.js";

export const getAttractions = (req, res) =>{
    getAllAttractions((error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    })
}
export const getAttractionByID = (req, res) => {
    let id = req.params.id;
    getByID(id, (error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    })
}

export const getTypeAttractionByID = (req, res) => {
    let id = req.body.id;
    getTypeOfAnAttraction(id, (error, result) => {
        if (error){
            console.error(error);
            res.status(400).send({success:1, content: error});
        } else {
            console.log(result);
            res.status(200).send(result)
        }
    })
}

export const updateAttraction = (req, res) => {
    let {id, nom, prix_enfant, prix_adulte, taille_requise} = req.body;
    console.log(req.body)
    if (!id || !nom || !prix_enfant || !prix_adulte || !taille_requise){
        return res.status(400).send({success:0, error: "Une ou plusieurs informations sont manquantes"})
    } else {
        updateAttractionById(id, nom, prix_enfant, prix_adulte, taille_requise)
            .then(modif => {
                return res.status(200).send({success:1, data:"L'attraction a été modifiée avec succès"});
            })
            .catch(err => {
                console.log("AAAAAAAAAAAAAA");
                return res.status(400).send({success:0, error:err});
            });
    }
}

export const createAttraction = (req, res) => {
    let {nom, prix_enfant, prix_adulte, taille_requise, id_type_attraction, id_compte,id_emplacement} = req.body;
    console.log(req.body)
    if (!nom || !prix_enfant || !prix_adulte || !taille_requise || !id_type_attraction || !id_compte || !id_emplacement){
        return res.status(400).send({success:0, error: "Une ou plusieurs informations sont manquantes"})
    } else {
        insertAttraction(nom, prix_enfant, prix_adulte, taille_requise, id_type_attraction, id_compte, id_emplacement,(error,result)=>{
            if (error){
                return res.status(400).send({success:0, error:error});
            }
            return res.status(200).send({sucess:1, data:result});
        })

    }

}