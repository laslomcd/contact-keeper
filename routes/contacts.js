const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route POST api/auth
// @desc Add a contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add a contact");
});

// @route PUT api/contacts/:id
// @desc Update a user
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route DELETE api/auth/:id
// @desc Delete a contact
// @access Private
router.delete("/", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
