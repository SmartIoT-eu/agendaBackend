const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123456',
    database: 'firstapi',
    port: '5432'
});


const getUsers = async (req, res) => {
    const resposone = await pool.query('SELECT * FROM users');
    //console.log(resposone.rows);
    res.status(200).json(resposone.rows);
}

const createUsers = async (req, res) => {
    //const respones = await pool.query('');
}

module.exports = {
    getUsers,
    createUsers
}