const express = require("express");
const router = express.Router();
const undergraduateController = require("../controllers/undergraduateController");

router.post("/", undergraduateController.createUndergraduate);
router.put("/:id", undergraduateController.updateUndergraduate);
router.delete("/:id", undergraduateController.deleteUndergraduate);
router.get("/:id", undergraduateController.getUndergraduateById);
router.get("/", undergraduateController.getAllUndergraduates);

module.exports = router;
