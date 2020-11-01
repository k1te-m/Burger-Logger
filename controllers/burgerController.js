const express = require("express");

const router = express.Router();

//Import burger model for database functions
const burger = require("../models/burger");

//Routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
  burger.create(["name"], [req.body.name], function (results) {
    res.json({ id: results.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.update({devoured: req.body.devoured}, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})


module.exports = router;
