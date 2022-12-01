

class PlacementSRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE PLACEMENTS(
                        idPlacementS INT NOT NULL AUTO_INCREMENT,
                        idStand INT NOT NULL,
                        idEmplacement INT NOT NULL,
                        FOREIGN KEY(idStand) REFERENCES STAND(idStand),
                        FOREIGN KEY(idEmplacement) REFERENCES EMPLACEMENT(idEmplacement),
                        PRIMARY KEY(idPlacementS)
                        );`;
        return this.dao.run(sql, "PlacementS tables OK");
    }


    async initTable(){

        //Scipt SQL ?
    }

    async countPlacementS(){
        let sql = `SELECT count(*) FROM PLACEMENTS`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllPlacementS(){
        let sql = `SELECT * FROM PLACEMENTS`;
        return await this.dao.all(sql);
    }

    async getByIdPlacementS(id){
        let params = [id];
        let sql = "SELECT idPlacementS, idStand, idEmplacement FROM PLACEMENTS WHERE idPlacementS=$1";
        return await this.dao.get(sql, params);
    }

    async deletePlacementS(id) {
        let params = [id];
        let sql = 'DELETE FROM PLACEMENTS WHERE idPlacementS=$1';
        return await this.dao.delete(sql, params);
    }

    async updatePlacementS(id,idStand, idEmplacement){
        let params = [id,idStand, idEmplacement];
        let sql = `UPDATE PLACEMENTS SET idStand=$2, idEmplacement=$3
                        WHERE idPlacementS=$1`;
        return await this.dao.get(sql,params);
    }

}

module.exports = PlacementSRepository;

