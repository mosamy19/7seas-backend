const { Profile } = require("../models/profile");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  let profile = await Profile.findById(req.params.id).populate(
    "user",
    "firstName lastName email"
  );

  res.send(profile);
});

router.post("/:id", async (req, res) => {
  let user = req.params.id;

  let profile = new Profile({
    user: user,
    designation: req.body.designation
  });
  await profile.save();
  res.send(profile);
});

module.exports = router;
