require('dotenv').config();

const express = require("express");
const routes = require("./server/routes");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    sucess: true,
  });
});

app.use("/routes", routes);

const PORT = process.env.PORT;

app.listen(PORT);
