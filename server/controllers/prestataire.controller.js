import {getAllPrestataires, getByID} from "../services/prestataire.service.js";

export const getPrestataires = (req, res) =>{
    getAllPrestataires((error, result) => {
        if (error) {
            console.error(error);
        } else {
            res.send(JSON.stringify(result))
        }
    }).then(r => console.log(r));
}
export const getPrestataireByID = (req, res) =>{
    let id = req.params.id;
    getByID(id, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            res.send(JSON.stringify(result))
        }
    }).then(r => console.log(r));
}

export const createAccount = () =>{

}