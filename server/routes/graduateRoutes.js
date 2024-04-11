const express = require("express");
const router = express.Router();
const graduateController = require("../controllers/graduateController");

router.post("/", graduateController.createGraduate);
router.put("/:id", graduateController.updateGraduate);
router.delete("/:id", graduateController.deleteGraduate);
router.get("/:id", graduateController.getGraduateById);
router.get("/", graduateController.getAllGraduates);

module.exports = router;
