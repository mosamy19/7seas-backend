const mongoose = require("mongoose");
const Joi = require("joi");

const certificateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  }
});

const Certificate = mongoose.model("Certificate", certificateSchema);

function validateCertificate(certificate) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(255)
      .required()
  };

  return Joi.validate(certificate, schema);
}

exports.Certificate = Certificate;
exports.validate = validateCertificate;
exports.certificateSchema = certificateSchema;
