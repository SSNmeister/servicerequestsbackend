const pool = require("../db/db");
const queries = require("../queries/queries");

const getWorkers = (req, res) => {
  pool.query(queries.getWorkers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getWorkers,
};
