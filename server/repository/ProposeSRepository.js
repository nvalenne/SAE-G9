

class ProposeSRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE PROPOSES(
                        idStand INT,
                        idService INT,
                        FOREIGN KEY(idStand) REFERENCES STAND(idStand),
                        FOREIGN KEY(idService) REFERENCES SERVICE(idService),
                        PRIMARY KEY(idStand, idService)
                        );`;
        return this.dao.run(sql, "PROPOSES tables OK");
    }


    async initTable(){

        //Scipt SQL ?
    }

    async countProposeS(){
        let sql = `SELECT count(*) FROM PROPOSES`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllProposeS(){
        let sql = `SELECT * FROM PROPOSES`;
        return await this.dao.all(sql);
    }

    async getProposeSByIdStand(id){
        let params = [id];
        let sql = "SELECT idStand, idService FROM PROPOSES WHERE idStand=$1";
        return await this.dao.get(sql, params);
    }

    async getProposeSByIdService(id){
        let params = [id];
        let sql = "SELECT idStand, idService FROM PROPOSES WHERE idService=$1";
        return await this.dao.get(sql, params);
    }

    async deleteProposeSByIdStand(id) {
        let params = [id];
        let sql = 'DELETE FROM PROPOSES WHERE idStand=$1';
        return await this.dao.delete(sql, params);
    }

    async deleteProposeSByIdService(id) {
        let params = [id];
        let sql = 'DELETE FROM PROPOSES WHERE idService=$1';
        return await this.dao.delete(sql, params);
    }

    async updateProposeSByIdStand(idA,idS){
        let params = [idA,idS];
        let sql = `UPDATE PROPOSES SET idStand=$1, idService=$2
                        WHERE idStand=$1`;
        return await this.dao.get(sql,params);
    }

    async updateProposeSByIdService(idA,idS){
        let params = [idA,idS];
        let sql = `UPDATE PROPOSES SET idStand=$1, idService=$2
                        WHERE idService=$2`;
        return await this.dao.get(sql,params);
    }

}

module.exports = ProposeSRepository;