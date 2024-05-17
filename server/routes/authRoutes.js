const express = require("express");
const router = express.Router();
const {
	registerUser,
	loginUser,
	registerAdmin,
	registerCounseller,
	logout,
	authenticate,
} = require("../controllers/authController");

// Register route
router.post("/register", registerUser);
router.post("/registerAdmin", registerAdmin);
router.post("/registerCounseller", registerCounseller);
router.post("/login", loginUser);
router.post("/logout", logout);
// router.post("/forgetPassword", forgetPassword);
// router.post("/resetPassword", resetPassword);

module.exports = router;
