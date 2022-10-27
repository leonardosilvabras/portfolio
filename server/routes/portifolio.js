const router = require("express").Router();
const Portifolio = require("../models/Portifolio");

router.get("/", async (req, res) => {
  const portifolio = await Portifolio.find();
  res.json({
    sucess: true,
    data: portifolio
  });
});

router.post("/", async (req, res) => {
  const portifolio = new Portifolio({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPortifolio = await portifolio.save();
    res.json({
      sucess: true,
      data: savedPortifolio,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

module.exports = router;
