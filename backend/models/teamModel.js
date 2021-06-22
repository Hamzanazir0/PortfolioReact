var mongoose = require("mongoose");

var teamSchema = mongoose.Schema({
  name: String,
});

var teamModel = mongoose.model("hello", teamSchema);
module.exports = teamModel;
