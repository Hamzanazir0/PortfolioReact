var express = require("express");
var router = express.Router();

var teamModel = require("../models/teamModel");

/* GET home page. */
router.get("/", (req, res, next) => {
  return res.send("Hello World");
});

module.exports = router;
