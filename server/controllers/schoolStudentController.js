const SchoolStudent = require("../models/SchoolStudent");

const schoolStudentController = {
  createSchoolStudent: async (req, res) => {
    try {
      const {
        name,
        username,
        phoneNumber,
        emailAddress,
        highestQualifications,
        category,
        nic,
        age,
        password,
        grade,
      } = req.body;
      const schoolStudent = new SchoolStudent(
        null,
        name,
        username,
        phoneNumber,
        emailAddress,
        highestQualifications,
        category,
        nic,
        age,
        password,
        grade,
      );
      const studentId = await SchoolStudent.createSchoolStudent(schoolStudent);
      res.status(201).json({ studentId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateSchoolStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const schoolStudentData = req.body;
      const updated = await SchoolStudent.updateSchoolStudent(
        id,
        schoolStudentData,
      );
      if (updated) {
        res
          .status(200)
          .json({ message: "School student updated successfully" });
      } else {
        res.status(404).json({ error: "School student not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteSchoolStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await SchoolStudent.deleteSchoolStudent(id);
      if (deleted) {
        res
          .status(200)
          .json({ message: "School student deleted successfully" });
      } else {
        res.status(404).json({ error: "School student not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getSchoolStudentById: async (req, res) => {
    try {
      const { id } = req.params;
      const schoolStudent = await SchoolStudent.getSchoolStudentById(id);
      if (schoolStudent) {
        res.status(200).json(schoolStudent);
      } else {
        res.status(404).json({ error: "School student not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllSchoolStudents: async (req, res) => {
    try {
      const schoolStudents = await SchoolStudent.getAllSchoolStudents();
      res.status(200).json(schoolStudents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = schoolStudentController;
