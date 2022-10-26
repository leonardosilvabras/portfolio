const router = require("express").Router();

router.get("/", (req, res) => {
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

router.get('/:portifolioid', (req, res) => {
  console.log(req.params.portifolioid)

  res.json({
    sucess: true,
    id: req.params.portifolioid
  })
})

router.post('/', (req, res) => {
  res.json(req.body)
})

module.exports = router;
