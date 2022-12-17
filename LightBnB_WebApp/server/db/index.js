// Connect to database
const { Pool } = require('pg');
require('dotenv').config();

const user = process.env.DBUSERNAME || 'vagrant';
const password = process.env.DBPASSWORD || '123';
const host = process.env.DBHOST || 'localhost';
const database = process.env.DBNAME || 'lightbnb';


const pool = new Pool({
  user,
  password,
  host,
  database
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};