import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });


const pool = mysql.createPool({
  host: "149.130.222.175",
  port: 3306,
  user: "root",
  password: "mysql_Y22Aiz",
  database: "blog_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;