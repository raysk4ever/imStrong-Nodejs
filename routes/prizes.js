const router = require("express").Router();
const Prizes = require("../models/prizes");
const {prizes} = require("../data/prize");

//add all country
router.post("/all", async (req, res)=>{
    await Prizes.insertMany(prizes);
    res.send(`done`);
});

module.exports = router;