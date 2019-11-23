const { countries } = require("../data/country");
const Country = require("../models/country");

exports.addAllCountries = (req, res)=>{
    try{
        countries.map( async item=>{
            const country = new Country({
                name: item.name,
                code: item.code
            });
            // await country.save();
        });
        res.send({error: false, result: `country added successfully!!`})
    }catch(e){
        console.log(e)
        res.send({error: true, errorMessage: `Something went wrong!!`});
}
}