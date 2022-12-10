const bcrypt = require('bcrypt');

class CompteRepository{

    constructor(dao) {
        this.dao = dao;
    }

    async createTable(){
        const sql =`CREATE TABLE COMPTE(
                         idCompte SERIAL NOT NULL,
                         identifiant VARCHAR(50),
                         mdp VARCHAR(50),
                         mail VARCHAR(50),
                         nom VARCHAR(50),
                         prenom VARCHAR(50),
                         role VARCHAR(50),
                         PRIMARY KEY(idCompte)
                         );`;
        return this.dao.run(sql, "COMPTE tables OK");
    }


    async initTable(){

        let sql = 'INSERT INTO Compte (identifiant, mdp, mail, nom, role, prenom) VALUES\n' +
            '(\'admin1\',\'1234\',\'admin1@gmail.com\',\'Jean\',\'admin\',\'Michel\'),\n' +
            '(\'admin2\',\'abcd\',\'admin2@gmail.com\',\'Philippe\',\'admin\',\'Martin\'),\n' +
            '(\'prestataire1\',\'1234\',\'prestataire1@gmail.com\',\'Jacques\',\'prestataire\',\'Max\'),\n' +
            '(\'prestataire2\',\'abcd\',\'prestataire2@gmail.com\',\'Elizabeth\',\'prestataire\',\'Carl\'),\n' +
            '(\'prestataire3\',\'1234\',\'prestataire3@gmail.com\',\'Ryan\',\'prestataire\',\'Poupou\'),\n' +
            '(\'prestataire4\',\'abcd\',\'prestataire4@gmail.com\',\'Steven\',\'prestataire\',\'I\');\n'
        return this.dao.run(sql,'inserts');

    }

    async addCompte(identifiant, mdp, mail, nom, prenom){
        let sql;
        let params;
        bcrypt.hash(mdp, 10, (err) => {
            if (err) {
                return err;
            }
            let params = [identifiant, mdp, mail, nom, prenom]
            let sql = `INSERT INTO Compte
                       VALUES (null, $1, $2, $3, $4, $5, 'user')`

        })
        let rows = await this.dao.get(sql, params);
        return rows;
    }

    async countCompte(){
        let sql = `SELECT count(*) FROM COMPTE`;
        let rows = await this.dao.get(sql);
        return rows.count;
    }

    async getAllCompte(){
        let sql = `SELECT * FROM COMPTE`;
        return await this.dao.all(sql);
    }

    async getByIdCompte(id){
        let params = [id];
        let sql = "SELECT identifiant,mdp , mail,nom,role,prenom FROM COMPTE WHERE idCompte=$1";
        return await this.dao.get(sql, params);
    }

    async deleteCompte(id) {
        let params = [id];
        let sql = 'DELETE FROM COMPTE WHERE idCompte=$1';
        return await this.dao.delete(sql, params);
    }

    async updateCompte(id,identifiant,mdp,mail,nom,role){
        let params = [id,identifiant,mdp,mail,nom,role];
        let sql = `UPDATE COMPTE SET identifiant=$2, mdp=$3, mail=$4, nom=$5, role=$6
                        WHERE idCompte=$1`;
        return await this.dao.get(sql,params);
    }




}

module.exports = CompteRepository;

