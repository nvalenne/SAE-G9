

class StandRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE STAND(
                            idStand INT NOT NULL AUTO_INCREMENT,
                            nom VARCHAR(50),
                            prix DECIMAL(5,2),
                            recette DECIMAL(6,2),
                            nbrClientsTotal INT,
                            attente INT,
                            idTypeStand INT NOT NULL,
                            idCompte INT NOT NULL,
                            FOREIGN KEY(idTypeStand) REFERENCES TYPESTAND(idTypeStand),
                            FOREIGN KEY(idCompte) REFERENCES COMPTE(idCompte),
                            PRIMARY KEY(idStand)
                            );`;
        return this.dao.run(sql, "STAND tables OK");
    }


    async initTable(){

        //Scipt SQL ?
    }

    async countStand(){
        let sql = `SELECT count(*) FROM STAND`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllStand(){
        let sql = `SELECT * FROM STAND`;
        return await this.dao.all(sql);
    }

    async getByIdStand(id){
        let params = [id];
        let sql = "SELECT nom,prix,recette,nbrClientsTotal,attente FROM STAND WHERE idStand=$1";
        return await this.dao.get(sql, params);
    }

    async deleteStand(id) {
        let params = [id];
        let sql = 'DELETE FROM STAND WHERE idStand=$1';
        return await this.dao.delete(sql, params);
    }

    async updateStand(id,nom,prix,recette,nbrClientsTotal,attente){
        let params = [id,nom,prix,recette,nbrClientsTotal,attente];
        let sql = `UPDATE STAND SET nom=$2 ,prix=$3 ,recette=$4 ,nbrClientsTotal=$5 ,attente=$6
                        WHERE idStand=$1`;
        return await this.dao.get(sql,params);
    }

}

module.exports = StandRepository;

