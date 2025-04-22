const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'madhaesh2004', // 🔁 replace this with your real password
  database: 'job_portal'
});

module.exports = db;
