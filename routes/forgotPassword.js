const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { User, validate } = require("../models/user");

router.post("/", async (req, res) => {
  if (req.body.email === "") {
    res.status(400).send("email required");
  }
  console.error(req.body.email);

  let user = User.findOne({
    email: req.body.email
  }).then(() => {
    if (user === null) {
      console.error("email not in database");
      res.status(403).send("email not in db");
    } else {
      const token = user.generateAuthToken().then(user => {
        user
          .update({
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 360000
          })
          .then(user => {
            user.save();
          })
          .then(() => {
            let transporter = nodemailer.createTransport({
              host: "smtp.zoho.com",
              port: 465,
              secure: true, // true for 465, false for other ports
              auth: {
                user: "admin@7seascrewing.com", // generated ethereal user
                pass: "CWGw3KVBzHJV" // generated ethereal password
              }
            });

            var mailOptions = {
              from: "admin@7seascrewing.com",
              to: "admin@7seascrewing.com",
              subject: "New message from contact form at tylerkrys.ca",
              text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.
                         Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:
                         http://localhost:3000/reset/${token}
                        If you did not request this, please ignore this email and your password will remain unchanged.`
            };

            console.log("sending mail");
            transporter.sendMail(mailOptions, (err, response) => {
              if (err) {
                console.error("there was an error: ", err);
              } else {
                console.log("here is the res: ", mailOptions, response);
                res.status(200).send(true);
              }
            });
          });
      });
    }
  });
});

module.exports = router;
