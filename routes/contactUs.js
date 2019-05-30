var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  var msg = req.body;

  let transporter = await nodemailer.createTransport({
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
    text: `${msg.name} (${msg.email}) says: ${msg.msg} and his number is ${
      msg.number
    }`
  };

  await transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", response);
      res.status(200).send(true);
    }
  });
});

module.exports = router;
