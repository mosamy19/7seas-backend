const _ = require("lodash");
const { Country, validate } = require("../models/country");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const countries = await Country.find()
    .sort("name")
    .select("name");
  res.send(countries);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let country = new Country({
    name: req.body.name,
    code: req.body.code
  });
  await country.save();
  res.send(country);
});

module.exports = router;
