const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://ravi:ravi@cluster0-7pwcx.mongodb.net/test?retryWrites=true&w=majority";

module.exports = mongoose.connect(dbUrl)
                .then(()=>console.log(`connected to mongodb...`))
                .catch(err=>console.log(`Error: ${err}`));