import {getAllStands, getByID} from "../services/stand.service.js";

export const getStands = (req, res) =>{
    getAllStands((error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(JSON.stringify(result))
        }
    }).then(r => console.log(r));
}
export const getStandByID = (req, res) =>{
    let id = req.params.id;
    getByID(id, (error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(JSON.stringify(result))
        }
    }).then(r => console.log(r));
}