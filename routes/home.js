const router = require("express").Router();
const Laureates = require("../models/laureates");

router.get("/", (req, res)=>{
    res.render("index", {error: null});
});

router.post("/get", async (req, res)=>{
    console.log(req.body)
    const laureates = await Laureates.find({
        $or: [{"firstname": { "$regex": req.body.name, "$options": "i" }}, {"surname": { "$regex": req.body.name, "$options": "i" }}] 
    })
    if(!laureates.length) return res.render("index", {error: true}) 
    res.render("result", {data: laureates})
})

module.exports = router;