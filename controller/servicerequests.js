const pool = require("../db/db");
const queries = require("../queries/queries");

const getServiceRequests = (req, res) => {
  pool.query(queries.getServiceRequests, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getServiceRequestsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getServiceRequestsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const createServiceRequests = (req, res) => {
  const { project, date, main_contractor, pic, time, pax, transport, jobs } =
    req.body;

  pool.query(
    queries.createServiceRequests,
    [project, date, main_contractor, pic, time, pax, transport, jobs],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Services created Successfully!");
      console.log("Services created");
    }
  );
};
// const createServiceRequests = (req, res) => {
//   const {
//     project,
//     date,
//     main_contractor,
//     pic,
//     job_item,
//     location,
//     workers,
//     time,
//     pax,
//     transport,
//   } = req.body;

//   pool.query(
//     queries.createServiceRequests,
//     [
//       project,
//       date,
//       main_contractor,
//       pic,
//       job_item,
//       location,
//       workers,
//       time,
//       pax,
//       transport,
//     ],
//     (error, results) => {
//       if (error) throw error;
//       res.status(201).send("Services created Successfully!");
//       console.log("Services created");
//     }
//   );
// };

const updateServiceRequestsById = (req, res) => {
  const id = parseInt(req.body.id);

  const {
    project,
    date,
    main_contractor,
    pic,
    job_item,
    location,
    workers,
    time,
    pax,
    transport,
    response,
  } = req.body;

  pool.query(
    queries.updateServiceRequestsById,
    [project, date, main_contractor, pic, time, pax, transport, response, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("Updated services successfully!");
    }
  );
};

const getRespondedServiceRequests = (req, res) => {
  pool.query(queries.getRespondedServiceRequests, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getServiceRequests,
  getServiceRequestsById,
  createServiceRequests,
  updateServiceRequestsById,
  getRespondedServiceRequests,
};
