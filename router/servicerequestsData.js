const { Router } = require("express");
const controller = require("../controller/servicerequests");

const router = Router();

router.get("/", controller.getServiceRequests);
router.put("/", controller.updateServiceRequestsById);
router.post("/", controller.createServiceRequests);
router.get("/responded", controller.getRespondedServiceRequests);

module.exports = router;
