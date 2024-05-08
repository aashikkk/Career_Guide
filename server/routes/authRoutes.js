const express = require("express");
const router = express.Router();
const {
	registerUser,
	loginUser,
	forgetPassword,
	resetPassword,
	registerAdmin,
	registerCounseller,
} = require("../controllers/authController");

// Register route
router.post("/register", registerUser);
router.post("/registerAdmin", registerAdmin);
router.post("/registerCounseller", registerCounseller);
router.post("/login", loginUser);
// router.post("/forgetPassword", forgetPassword);
// router.post("/resetPassword", resetPassword);

module.exports = router;
