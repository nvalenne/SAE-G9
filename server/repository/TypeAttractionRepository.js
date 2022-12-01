

class TypeAttractionRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE TypeAttraction(
                        idTypeAttraction INT NOT NULL AUTO_INCREMENT,
                        designation VARCHAR(50),
                        PRIMARY KEY(idTypeAttraction)
                        );`;
        return this.dao.run(sql, "TypeAttraction table OK");
    }


    async initTable(){

        //Scipt SQL ?


    }

    async countTypeAttraction(){
        let sql = `SELECT count(*) FROM TypeAttraction`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllTypeAttraction(){
        let sql = `SELECT * FROM TypeAttraction`;
        return await this.dao.all(sql);
    }

    async getByIdTypeAttraction(id){
        let params = [id];
        let sql = "SELECT designation FROM TypeAttraction WHERE idTypeAttraction=$1";
        return await this.dao.get(sql, params);
    }

    async deleteTypeAttraction(id) {
        let params = [id];
        let sql = 'DELETE FROM TypeAttraction WHERE idTypeAttraction=$1';
        return await this.dao.delete(sql, params);
    }

    async updateTypeAttraction(id,designation){
        let params = [id,designation];
        let sql = `UPDATE TypeAttraction SET designation=$2
                        WHERE idTypeAttraction=$`;
        return await this.dao.get(sql,params);
    }

}

module.exports = TypeAttractionRepository;

