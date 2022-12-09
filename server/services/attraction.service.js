async function getAllAttractions(callback){
    try {
        let repo = require("../repository/AttractionRepository")
        let results = await new repo().getAllAttraction()
        return callback(null, results.json())
    } catch (e) {
        return callback(e, [])
    }
}

module.exports = {
    getAllAttractions
}