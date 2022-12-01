

class TypeStandRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE TYPESTAND(
                        idTypeStand INT NOT NULL AUTO_INCREMENT,
                        designation VARCHAR(50),
                        PRIMARY KEY(idTypeStand)
                        );`;
        return this.dao.run(sql, "TYPESTAND table OK");
    }


    async initTable(){

        //Scipt SQL ?


    }

    async countTypeStand(){
        let sql = `SELECT count(*) FROM TYPESTAND`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllTypeStand(){
        let sql = `SELECT * FROM TYPESTAND`;
        return await this.dao.all(sql);
    }

    async getByIdTypeStand(id){
        let params = [id];
        let sql = "SELECT designation FROM TYPESTAND WHERE idTypeStand=$1";
        return await this.dao.get(sql, params);
    }

    async deleteTypeStand(id) {
        let params = [id];
        let sql = 'DELETE FROM TYPESTAND WHERE idTypeStand=$1';
        return await this.dao.delete(sql, params);
    }

    async updateTypeStand(id,designation){
        let params = [id,designation];
        let sql = `UPDATE TYPESTAND SET designation=$2
                        WHERE idTypeStand=$`;
        return await this.dao.get(sql,params);
    }

}

module.exports = TypeStandRepository;

