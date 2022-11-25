import pg from "pg";

export class AppDAO {
    constructor() {
        const credentials = {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
        };
        this.db = new pg.Pool(credentials);
        this.testConn().then();
    }
    async testConn(){
        const client = await this.db.connect();
        try {
            const res = await client.query("SELECT current_database()");
            console.log(res.rows[0]);
        }catch(err){
            console.log("Impossible de se connecter à la base de données", err);
        }finally {
            client.release();
        }
    }
}