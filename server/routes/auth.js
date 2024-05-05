const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");

// Register route
router.post("/register", registerController.registerUser);
router.post("/login", loginController.loginUser);

module.exports = router;
