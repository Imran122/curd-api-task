const express = require("express");
const router = express.Router();

// import controller

const {
  createUser,
  listUser,
  updateUserData,
  deleteUserData,
} = require("../controller/userController");

router.post("/createuser", createUser);
router.get("/listuser", listUser);
router.patch("/update-user", updateUserData);
router.delete("/delete-user", deleteUserData);

module.exports = router;
