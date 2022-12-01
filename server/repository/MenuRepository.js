

class MenuRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE MENU(
                        idStand INT,
                        idProduit INT,
                        FOREIGN KEY(idStand) REFERENCES STAND(idStand),
                        FOREIGN KEY(idProduit) REFERENCES PRODUIT(idProduit),
                        PRIMARY KEY(idStand, idProduit)
                        );`;
        return this.dao.run(sql, "MENU tables OK");
    }


    async initTable(){

        //Scipt SQL ?


    }

    async countMenu(){
        let sql = `SELECT count(*) FROM MENU`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllMenu(){
        let sql = `SELECT * FROM MENU`;
        return await this.dao.all(sql);
    }

    async getMenuByIdStand(id){
        let params = [id];
        let sql = "SELECT idStand, idProduit FROM MENU WHERE idStand=$1";
        return await this.dao.get(sql, params);
    }

    async deleteMenu(id) {
        let params = [id];
        let sql = 'DELETE FROM MENU WHERE idMenu=$1';
        return await this.dao.delete(sql, params);
    }

    async updateMenu(idS,idP){
        let params = [idS,idP];
        let sql = `UPDATE MENU SET idS=$2 idP=$2
                        WHERE idS=$1`;
        return await this.dao.get(sql,params);
    }




}

module.exports = MenuRepository;

