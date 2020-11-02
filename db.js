const Pool = require('pg').Pool;

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:MeganRussell13@dlocalhost:5432/pernbudget"

const pool = new Pool({
 connectionString,
});

module.exports = pool;
