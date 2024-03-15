const express = require("express");
const router = express.Router();

// import controller

const { createUser } = require("../controller/userController");

router.post("/createuser", createUser);

module.exports = router;
