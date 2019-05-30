const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Joi = require("joi");

// const { Profile } = require("./profile");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  role: {
    type: String,
    enum: ["admin", "company", "sailor"],
    lowercase: true,
    trim: true,
    default: "sailor"
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, role: this.role }, "jwtPrivateKey"); // config.get("jwtPrivateKey")
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    firstName: Joi.string()
      .min(2)
      .max(50)
      .required(),
    lastName: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .max(1024)
      .required(),
    role: Joi.string().valid(["admin", "company", "sailor"])
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
exports.userSchema = userSchema;
