const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { User, validate } = require("../models/user");

router.get("/", async (req, res) => {
  //   console.log("Query", req.query);
  User.findOne({
    resetPasswordToken: req.query.resetPasswordToken,
    resetPasswordExpires: Date.now()
  }).then(user => {
    if (user == null) {
      console.error("password reset link is invalid or has expired");
      res.status(403).send("password reset link is invalid or has expired");
    } else {
      res.status(200).send({
        username: user.username,
        message: "password reset link a-ok"
      });
    }
  });
});

module.exports = router;
