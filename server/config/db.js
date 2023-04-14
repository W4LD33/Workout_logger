const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 3006,
    database: 'workoutlogger',
    password: 'password'
})  

// const pool = new Pool({
//     user: process.env.USERNAME,
//     host: process.env.HOST,
//     port: process.env.DBPORT,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD
// })
  
module.exports = pool;
