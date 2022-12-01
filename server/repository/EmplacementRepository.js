

class EmplacementRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE EMPLACEMENT(
                        idEmplacement SERIAL NOT NULL,
                        prix DECIMAL(6,2),
                        taille DECIMAL(6,2),
                        PRIMARY KEY(idEmplacement)
                    );`;
        return this.dao.run(sql, "EMPLACEMENT tables OK");
    }


    async initTable(){

        //Scipt SQL ?


    }

    async countEmplacement(){
        let sql = `SELECT count(*) FROM EMPLACEMENT`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllEmplacement(){
        let sql = `SELECT * FROM EMPLACEMENT`;
        return await this.dao.all(sql);
    }

    async getByIdEmplacement(id){
        let params = [id];
        let sql = "SELECT prix, taille FROM EMPLACEMENT WHERE idEmplacement=$1";
        return await this.dao.get(sql, params);
    }

    async deleteEmplacement(id) {
        let params = [id];
        let sql = 'DELETE FROM EMPLACEMENT WHERE idEmplacement=$1';
        return await this.dao.delete(sql, params);
    }

    async updateEmplacament(id,prix,taille){
        let params = [id,prix,taille];
        let sql = `UPDATE EMPLACEMENT SET prix=$2, taille =$2
                        WHERE idEmplcaement=$1`;
        return await this.dao.get(sql,params);
    }




}

module.exports = EmplacementRepository;

