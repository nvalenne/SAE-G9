import {getAllAttractions, getByID} from "../services/attraction.service.js";

export const getAttractions = (req, res) =>{
    getAllAttractions((error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    }).then(r => console.log(r));
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
    }).then(r => console.log(r));
}