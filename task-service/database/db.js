const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'os_manager',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
