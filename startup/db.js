const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect("mongodb://localhost/sevenSeas")
    .then(() => console.info("Connected to MongoDb..."));
};
