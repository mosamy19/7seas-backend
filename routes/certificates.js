const _ = require("lodash");
const { Certificate, validate } = require("../models/certificate");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const certificates = await Certificate.find(); //.sort("name");
  res.send(certificates);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let certificate = new Certificate({
    name: req.body.name
  });
  await certificate.save();
  res.send(certificate);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const certificate = await Certificate.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!certificate)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(certificate);
});

router.delete("/:id", async (req, res) => {
  const certificate = await Certificate.findByIdAndRemove(req.params.id);

  if (!certificate)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(certificate);
});

router.get("/:id", async (req, res) => {
  const certificate = await Certificate.findBy(req.params.id);
  if (!certificate)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(certificate);
});

module.exports = router;
