const { createPool } = require('mysql2/promise');

const pool = createPool({
    host: process.env.HOST,
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.BD
})

module.exports = pool;
