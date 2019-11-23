const mongoose = require("mongoose");

const prizesSchema = new mongoose.Schema({
    year: String, 
    category: String, 
    share: String, 
    motivation: String, 
    affiliations: [{
        name: String,
        city: String,
        country: String,
    }]
})

module.exports = mongoose.model("Laureates", new mongoose.Schema({
    
    id:String,
    firstname:String,
    surname:String,
    born:String,
    died:String,
    bornCountry:String,
    bornCountryCode:String,
    bornCity:String,
    diedCountry:String,
    diedCountryCode:String,
    diedCity:String,
    gender:String,
    prizes: [prizesSchema]
}));