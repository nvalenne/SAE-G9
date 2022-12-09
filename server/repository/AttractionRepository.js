

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

        let sql = 'INSERT INTO ATTRACTION (nom, prixAdulte, prixEnfant, tailleRequise, recette, nbrClientsTotal, attente, idTypeAttraction, idCompte) VALUES\n' +
            '(\'dégueulator\',10,8,1.3,0,0,0,7,3),\n' +
            '(\'space mountains\',10,8,1.3,0.,0,0,1,3),\n' +
            '(\'rapide et furieux\',10,8,1.3,0,0,0,1,4),\n' +
            '(\'splash\',10,8,1.3,0,0,0,3,5),\n' +
            '(\'Spaceglider\',10,8,1.3,0,0,0,6,6);'
        return this.dao.run(sql,'inserts');

    }

    async countAttraction(){
        let sql = `SELECT count(*) FROM ATTRACTION`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllAttraction(){
        let sql = `SELECT * FROM attraction`;
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

