const express = require("express");
const router = express.Router();
const schoolStudentController = require("../controllers/schoolStudentController");

router.post("/", schoolStudentController.createSchoolStudent);
router.put("/:id", schoolStudentController.updateSchoolStudent);
router.delete("/:id", schoolStudentController.deleteSchoolStudent);
router.get("/:id", schoolStudentController.getSchoolStudentById);
router.get("/", schoolStudentController.getAllSchoolStudents);

module.exports = router;
