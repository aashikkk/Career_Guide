const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.get("/category/:category", userController.getUsersByCategory); // New route for getting users by category

module.exports = router;
