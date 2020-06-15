const { Profile } = require("../models/profile");
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.json());
router.get("/:id", async (req, res) => {
  let profile = await Profile.findById(req.params.id).populate(
    "user",
    "firstName lastName email"
  );

  res.send(profile);
});

router.post("/:id", async (req, res) => {
  let user = req.params.id;
  let profile = { user: user, ...req.body };
  Profile.create(profile)
    .then(
      profile => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(profile);
      },
      err => console.log(err)
    )
    .catch(err => console.log(err));
  // let data = req.body;
  // let profile = new Profile({ data });
  // await profile.save();
  // res.send(profile);
});

module.exports = router;
