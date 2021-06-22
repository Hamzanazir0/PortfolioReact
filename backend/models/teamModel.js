var mongoose = require("mongoose");

var teamSchema = mongoose.Schema({
  name: String,
  age: String,
  Class: String,
});

var teamModel = mongoose.model("team", teamSchema);
module.exports = teamModel;
