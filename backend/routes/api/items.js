const express = require("express");
const router = express.Router();

// Item Model

const Item = require("../../model/Item");

// @router Get api/items
//@desc get All Item
//@access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((item) => res.json(item));
});
// @router Post api/items
//@desc create  Item
//@access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});
// @router delete api/items
//@desc delete  Item
//@access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
