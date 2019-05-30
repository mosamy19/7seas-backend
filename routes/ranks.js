const _ = require("lodash");
const { Rank, validate } = require("../models/rank");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const ranks = await Rank.find(); //.sort("name");
  res.send(ranks);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let rank = new Rank({
    name: req.body.name
  });
  await rank.save();
  res.send(rank);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const rank = await Rank.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!rank)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(rank);
});

router.delete("/:id", async (req, res) => {
  const rank = await Rank.findByIdAndRemove(req.params.id);

  if (!rank)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(rank);
});

router.get("/:id", async (req, res) => {
  const rank = await Rank.findBy(req.params.id);
  if (!rank)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(rank);
});

module.exports = router;
