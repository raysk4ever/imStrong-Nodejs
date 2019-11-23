const router = require("express").Router();
const Laureates = require("../models/laureates");
const {laureates} = require("../data/laureate");

//add all country
router.post("/all", async (req, res)=>{
    await Laureates.insertMany(laureates);
    res.send(`done`);
});

module.exports = router;