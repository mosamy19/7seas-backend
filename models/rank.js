const mongoose = require("mongoose");
const Joi = require("joi");

const rankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  }
});

const Rank = mongoose.model("Rank", rankSchema);

function validateRank(rank) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(255)
      .required()
  };

  return Joi.validate(rank, schema);
}

exports.Rank = Rank;
exports.validate = validateRank;
exports.rankSchema = rankSchema;
