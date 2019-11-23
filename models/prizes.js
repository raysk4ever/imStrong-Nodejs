const mongoose = require("mongoose");

const laureatesSchema = new mongoose.Schema({
    id:String,
    firstname: String,
    surname: String,
    motivation:String,
    share:String
})

module.exports = mongoose.model("Prizes", new mongoose.Schema({
    year: String,
    category: String,
    laureates: [laureatesSchema]
}));