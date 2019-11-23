const mongoose = require("mongoose");

module.exports = mongoose.model("Country", new mongoose.Schema({
    name: String,
    code: String
}));