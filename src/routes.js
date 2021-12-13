
const express = require("express");
// const Multer = require("multer");

// const multer = Multer();

const routes = express.Router();

routes.get("/teste", function (req,res) {
    console.log('foi');
    res.status(200).send('Hello Vinicius');

});


module.exports = routes;
