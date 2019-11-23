const express = require("express");
const Country = require("../routes/country");
const Prizes = require("../routes/prizes");
const Laureates = require("../routes/laureates");
const Home = require("../routes/home");

module.exports = app => {

    app.use("/country", Country);
    app.use("/prizes", Prizes);
    app.use("/laureates", Laureates);
    app.use("/", Home);

}