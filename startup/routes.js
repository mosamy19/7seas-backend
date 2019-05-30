const express = require("express");
const contactUs = require("../routes/contactUs");
const users = require("../routes/users");
const auth = require("../routes/auth");
const ranks = require("../routes/ranks");
const certificates = require("../routes/certificates");
const profile = require("../routes/profile");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/contactUs", contactUs);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/ranks", ranks);
  app.use("/api/profile", profile);
  app.use("/api/certificates", certificates);
};
