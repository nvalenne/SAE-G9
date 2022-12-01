

class ProduitRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE PRODUIT(
                        idProduit INT NOT NULL AUTO_INCREMENT,
                        nomProduit VARCHAR(50),
                        PRIMARY KEY(idProduit)
                        );`;
        return this.dao.run(sql, "PRODUIT tables OK");
    }


    async initTable(){

        //Scipt SQL ?


    }

    async countProduit(){
        let sql = `SELECT count(*) FROM PRODUIT`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllProduit(){
        let sql = `SELECT * FROM PRODUIT`;
        return await this.dao.all(sql);
    }

    async getByIdProduit(id){
        let params = [id];
        let sql = "SELECT nomProduit FROM PRODUIT WHERE idProduit=$1";
        return await this.dao.get(sql, params);
    }

    async deleteProduit(id) {
        let params = [id];
        let sql = 'DELETE FROM PRODUIT WHERE idProduit=$1';
        return await this.dao.delete(sql, params);
    }

    async updateProduit(id,nomProduit){
        let params = [id,nomProduit];
        let sql = `UPDATE EMPLACEMENT SET nomProduit=$2
                        WHERE idProduit=$1`;
        return await this.dao.get(sql,params);
    }

}

module.exports = ProduitRepository;

