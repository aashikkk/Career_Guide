const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/", adminController.createAdmin);
router.put("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);
router.get("/:id", adminController.getAdminById);
router.get("/", adminController.getAllAdmins);

module.exports = router;
