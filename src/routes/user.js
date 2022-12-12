const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

//Creater User 🗽
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

//Get all Users 🐊
router.get("/users", (req, res) => {
  const id = req.params.id;
  userSchema
    .find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});
//Get a User 🐘
router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  userSchema
    .findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

//update a user 🧑‍🎄
router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name: "mamo" } })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

//delete a user 😡
router.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  userSchema
    .remove({ _id: id })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

module.exports = router;
