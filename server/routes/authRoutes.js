const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  registerAdmin,
  logout,
  registerCounsellor,
} = require("../controllers/authController");
const { validateToken } = require("../middlewares/auth");

// Register route
router.post("/register", registerUser);
router.post("/registerAdmin", registerAdmin);
router.post("/registerCounseller", registerCounsellor);
router.post("/login", loginUser);
router.post("/logout", validateToken, logout);
// router.post("/forgetPassword", forgetPassword);
// router.post("/resetPassword", resetPassword);

module.exports = router;
