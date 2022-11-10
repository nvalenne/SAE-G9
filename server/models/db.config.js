import pg from "pg";
const client = new pg.Client({
    user: 'nathanv',
    host: 'localhost',
    database: 'saeg9',
    password: '1234'
});

export default client;