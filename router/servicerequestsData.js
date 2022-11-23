const { Router } = require("express");
const controller = require("../controller/servicerequests");

const router = Router();

router.get("/", controller.getServiceRequests);
router.get("/responded", controller.getRespondedServiceRequests);
router.get("/:id", controller.getServiceRequestsById);
router.put("/", controller.updateServiceRequestsById);
router.post("/", controller.createServiceRequests);

module.exports = router;
