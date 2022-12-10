

class ServiceRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE SERVICE(
                        idService SERIAL NOT NULL ,
                        nomService VARCHAR(50),
                        PRIMARY KEY(idService)
                        );`;
        return this.dao.run(sql, "SERVICE tables OK");
    }


    async initTable(){

        let sql = 'INSERT INTO SERVICE (nomService) VALUES\n' +
            '(\'prix à gagner\'),\n' +
            '(\'vente de nourriture\'),\n' +
            '(\'vente de goodies\'),\n' +
            '(\'consigne\'),\n' +
            '(\'cadeaux à gagner\'),\n' +
            '(\'accès mobilité réduite\');'
        return this.dao.run(sql,'inserts');

    }

    async countService(){
        let sql = `SELECT count(*) FROM SERVICE`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllService(){
        let sql = `SELECT * FROM SERVICE`;
        return await this.dao.all(sql);
    }

    async getByIdService(id){
        let params = [id];
        let sql = "SELECT nomService FROM SERVICE WHERE idService=$1";
        return await this.dao.get(sql, params);
    }

    async deleteService(id) {
        let params = [id];
        let sql = 'DELETE FROM SERVICE WHERE idService=$1';
        return await this.dao.delete(sql, params);
    }

    async updateService(id,nomService){
        let params = [id,nomService];
        let sql = `UPDATE EMPLACEMENT SET nomService=$2
                        WHERE idService=$1`;
        return await this.dao.get(sql,params);
    }




}

module.exports = ServiceRepository;

