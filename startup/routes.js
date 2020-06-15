const express = require("express");
const contactUs = require("../routes/contactUs");
const users = require("../routes/users");
const auth = require("../routes/auth");
const ranks = require("../routes/ranks");
const certificates = require("../routes/certificates");
const countries = require("../routes/countries");
const profile = require("../routes/profile");
const forgetPassword = require("../routes/forgotPassword");
const resetPassword = require("../routes/resetPassword");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/contactUs", contactUs);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/ranks", ranks);
  app.use("/api/forgetPassword", forgetPassword);
  app.use("/api/resetPassword", resetPassword);
  app.use("/api/certificates", certificates);
  app.use("/api/countries", countries);
};
