const router = require("express").Router();
const { addAllCountries } = require("../controllers/country");

//add all country
router.post("/all", addAllCountries);

module.exports = router;