const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    sucess: true,
  });
});

app.get("/portifolio", (req, res) => {
  const data = [
    {
      id: 1,
      name: "Portifolio",
      createdAt: "24-10-2022",
    },
    {
      id: 2,
      name: "Portifolio",
      createdAt: "24-10-2022",
    },
    {
      id: 3,
      name: "Portifolio",
      createdAt: "24-10-2022",
    },
  ];

  res.json({
    sucess: true,
    data: data,
  });
});

const PORT = 3080;

app.listen(PORT);
