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

const PORT = 3080;

app.listen(PORT);

//db pass JB7dOhtVx16TpSRS
// mongodb+srv://admin:<password>@portifolio.0lckpbs.mongodb.net/?retryWrites=true&w=majority
//