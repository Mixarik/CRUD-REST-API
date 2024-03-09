const Pool = require('pg').Pool;
const pool = new Pool({
   user: "postgres",
   password: "1221",
   host: "localhost",
   port: 5432,
   database: "crud"
});
//127.0.0.1
module.exports = pool