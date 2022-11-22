//==============================Service Requests=============================
const createServiceRequests =
  "INSERT INTO service_requests (project, date, main_contractor, pic, job_item, location, workers, time, pax, transport) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

const getServiceRequests = "SELECT * FROM service_requests";

const updateServiceRequestsById =
  "UPDATE service_requests SET project = $1, date = $2, main_contractor = $3, pic = $4, job_item = $5, location = $6, workers = $7, time = $8, pax = $9, transport = $10 WHERE id = $11";

//==========================================Workers =======================================

const getWorkers = "SELECT * FROM workers";

module.exports = {
  createServiceRequests,
  getServiceRequests,
  updateServiceRequestsById,
  getWorkers,
};
