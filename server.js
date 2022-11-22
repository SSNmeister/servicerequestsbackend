require("dotenv").config();

// //===========================================================================

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8002;

//============================================================================

const servierRequestsRouter = require("./router/servicerequestsData");
const workersRouter = require("./router/workersData");

//middleware to allow us to POST and get JSON from our endpoints.
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/servicerequests", servierRequestsRouter);
app.use("/workers", workersRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
