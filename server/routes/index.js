const router = require("express").Router();
const portifolio = require("./portifolio");

require('../database/mongoConnection')

router.get("/", (req, res) => {
  res.json({
    sucess: false,
    message: "err",
  });
});

router.use("/portifolio", portifolio);

module.exports = router;
