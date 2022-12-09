const mainService = require("../services/main_service");
let attractionRepo = require("../repository/AttractionRepository");
let repo = new attractionRepo()

exports.test = (req,res) =>{
    mainService.test((error,results)=>{ // modifier nom fonction
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
    res.render("Accueil")  //modifier nom fonction
}


exports.page_accueil = (req,res) =>{
    mainService.test((error,results)=>{ // modifier nom fonction
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
    res.render("page_accueil")  //modifier nom fonction
}

exports.page_connexion = (req,res)=>{
    mainService.test((error,results)=>{ //modifier nom fonction
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
    res.render(" connexion");  //modifier nom fonction
}

exports.carte_interactive = (req,res)=>{
    mainService.test((error,results)=>{ //modifier nom fonction
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
    res.render(" map");  //modifier nom fonction
}


exports.contact= (req,res)=>{
    mainService.test((error,results)=>{ //modifier nom fonction
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
            return res.status(200).send({
            success: 1,
            data: results,
        });
    });
    res.render("contact")   //modifier nom fonction
}

exports.page_infos= (req,res)=>{
    mainService.test((error,results)=>{ //modifier nom fonction
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
    res.render("page_infp")   //modifier nom fonction
}

exports.save_data= (req,res)=>{
    mainService.test((error,results)=>{ //modifier nom fonction
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
    res.render("")   //modifier nom fonction
}

exports.getAttractions= (req,res)=>{
    let service = require("../services/attraction.service.js")
    service.getAllAttractions((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}