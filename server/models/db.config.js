import pg from "pg";
import dotenv from "dotenv";
import {fileURLToPath} from "url";
import {dirname} from "path";
import {Sequelize} from "sequelize";
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({path : __dirname + "/../.env"});

export const client = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
});

export const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',

    // To create a pool of connections
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
});