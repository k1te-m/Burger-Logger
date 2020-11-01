const express = require("express");

const router = express.Router();

//Import burger model for database functions
const burger = require("../models/burger");

//Routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});


module.exports = router;
