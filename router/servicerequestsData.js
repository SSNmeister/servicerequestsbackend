const { Router } = require("express");
const controller = require("../controller/servicerequests");

const router = Router();

router.get("/", controller.getServiceRequests);
router.put("/", controller.updateServiceRequestsById);
router.post("/", controller.createServiceRequests);

module.exports = router;
