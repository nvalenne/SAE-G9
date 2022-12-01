

class AttractionRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE ATTRACTION(
                        idAttraction SERIAL NOT NULL ,
                        nom VARCHAR(50),
                        prixAdulte DECIMAL(5,2),
                        prixEnfant DECIMAL(5,2),
                        tailleRequise DECIMAL(3,2),
                        recette DECIMAL(6,2),
                        nbrClientsTotal INT,
                        attente INT,
                        idTypeAttraction INT NOT NULL,
                        idCompte INT NOT NULL,
                        FOREIGN KEY(idTypeAttraction) REFERENCES TYPEATTRACTION(idTypeAttraction),
                        FOREIGN KEY(idCompte) REFERENCES COMPTE(idCompte),
                        PRIMARY KEY(idAttraction)
                        );`;
        return this.dao.run(sql, "ATTRACTION tables OK");
    }


    async initTable(){

        //Scipt SQL ?


    }

    async countAttraction(){
        let sql = `SELECT count(*) FROM ATTRACTION`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllAttraction(){
        let sql = `SELECT * FROM ATTRACTION`;
        return await this.dao.all(sql);
    }

    async getByIdAttraction(id){
        let params = [id];
        let sql = "SELECT nom,prixAdulte,prixEnfant,tailleRequise,recette,nbrClientsTotal,attente FROM ATTRACTION WHERE idAttraction=$1";
        return await this.dao.get(sql, params);
    }

    async deleteAttraction(id) {
        let params = [id];
        let sql = 'DELETE FROM ATTRACTION WHERE idAttraction=$1';
        return await this.dao.delete(sql, params);
    }

    async updateAttraction(id,nom,prixAdulte,prixEnfant,tailleRequise,recette,nbrClientsTotal,attente){
        let params = [id,nom,prixAdulte,prixEnfant,tailleRequise,recette,nbrClientsTotal,attente];
        let sql = `UPDATE ATTRACTION SET nom=$2 ,prixAdulte=$3 ,prixEnfant=$4 ,tailleRequise=$5 ,recette=$6 ,nbrClientsTotal=$7 ,attente=$8
                        WHERE idAttraction=$1`;
        return await this.dao.get(sql,params);
    }




}

module.exports = AttractionRepository;

