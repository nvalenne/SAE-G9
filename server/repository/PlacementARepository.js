

class PlacementARepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE PLACEMENTA(
                        idPlacementA INT NOT NULL AUTO_INCREMENT,
                        idAttraction INT NOT NULL,
                        idEmplacement INT NOT NULL,
                        FOREIGN KEY(idAttraction) REFERENCES ATTRACTION(idAttraction),
                        FOREIGN KEY(idEmplacement) REFERENCES EMPLACEMENT(idEmplacement),
                        PRIMARY KEY(idPlacementA)
                        );`;
        return this.dao.run(sql, "PLACEMENTA tables OK");
    }


    async initTable(){

        //Scipt SQL ?
    }

    async countPlacementA(){
        let sql = `SELECT count(*) FROM PLACEMENTA`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllPlacementA(){
        let sql = `SELECT * FROM PLACEMENTA`;
        return await this.dao.all(sql);
    }

    async getByIdPlacementA(id){
        let params = [id];
        let sql = "SELECT idPlacementA, idAttraction, idEmplacement FROM PLACEMENTA WHERE idPlacementA=$1";
        return await this.dao.get(sql, params);
    }

    async deletePlacementA(id) {
        let params = [id];
        let sql = 'DELETE FROM PLACEMENTA WHERE idPlacementA=$1';
        return await this.dao.delete(sql, params);
    }

    async updatePlacementA(id,idPlacementA, idAttraction, idEmplacement){
        let params = [id,idPlacementA, idAttraction, idEmplacement];
        let sql = `UPDATE PLACEMENTA SET idPlacementA=$2, idAttraction=$3, idEmplacement=$4
                        WHERE idPlacementA=$1`;
        return await this.dao.get(sql,params);
    }

}

module.exports = PlacementARepository;

