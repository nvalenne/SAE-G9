

class ProposeARepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE PROPOSEA(
                        idAttraction INT,
                        idService INT,
                        FOREIGN KEY(idAttraction) REFERENCES ATTRACTION(idAttraction),
                        FOREIGN KEY(idService) REFERENCES SERVICE(idService),
                        PRIMARY KEY(idAttraction, idService)
                        );`;
        return this.dao.run(sql, "PROPOSEA tables OK");
    }


    async initTable(){

        //Scipt SQL ?
    }

    async countProposeA(){
        let sql = `SELECT count(*) FROM PROPOSEA`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllProposeA(){
        let sql = `SELECT * FROM PROPOSEA`;
        return await this.dao.all(sql);
    }

    async getProposeAByIdAttraction(id){
        let params = [id];
        let sql = "SELECT idAttraction, idService FROM PROPOSEA WHERE idAttraction=$1";
        return await this.dao.get(sql, params);
    }

    async getProposeAByIdService(id){
        let params = [id];
        let sql = "SELECT idAttraction, idService FROM PROPOSEA WHERE idService=$1";
        return await this.dao.get(sql, params);
    }

    async deleteProposeAByIdAttraction(id) {
        let params = [id];
        let sql = 'DELETE FROM PROPOSEA WHERE idAttraction=$1';
        return await this.dao.delete(sql, params);
    }

    async deleteProposeAByIdService(id) {
        let params = [id];
        let sql = 'DELETE FROM PROPOSEA WHERE idAttraction=$1';
        return await this.dao.delete(sql, params);
    }

    async updateProposeAByIdAttraction(idA,idS){
        let params = [idA,idS];
        let sql = `UPDATE PROPOSEA SET idAttraction=$1, idService=$2
                        WHERE idAttraction=$1`;
        return await this.dao.get(sql,params);
    }

    async updateProposeAByIdService(idA,idS){
        let params = [idA,idS];
        let sql = `UPDATE PROPOSEA SET idAttraction=$1, idService=$2
                        WHERE idService=$2`;
        return await this.dao.get(sql,params);
    }

}

module.exports = ProposeARepository;