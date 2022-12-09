import CompteRepository from "../repository/CompteRepository"

async function createCompte(identifiant, mdp, mail, nom, prenom, callback){
    let repo = new CompteRepository()
    try {
        await repo.addCompte(identifiant, mdp, mail, nom, prenom, (err, data) => {
            if (err) {
                return
            }
        })

    } catch (e) {
        return callback(e, [])
    }
}


