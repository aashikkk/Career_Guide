const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticate = require("../controllers/authController");

router.get("/", userController.getAllUsers);
router.get("/:username", userController.getUserByUsername);
router.get("/category/:category", userController.getUserByCategory);
router.put("/:username", userController.updateUser);
router.delete("/:username", userController.deleteUser);

module.exports = router;
