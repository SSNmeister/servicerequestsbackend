const { Router } = require("express");
const controller = require("../controller/workers");

const router = Router();

router.get("/", controller.getWorkers);

module.exports = router;
