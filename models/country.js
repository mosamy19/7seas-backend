const mongoose = require("mongoose");
const Joi = require("joi");

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  code: {
    type: String
  }
});

const Country = mongoose.model("Country", countrySchema);

function validateCountry(country) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(255)
      .required(),
    code: Joi.string()
  };

  return Joi.validate(country, schema);
}

exports.Country = Country;
exports.validate = validateCountry;
exports.countrySchema = countrySchema;
