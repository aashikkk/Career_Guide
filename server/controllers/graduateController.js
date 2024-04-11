const Graduate = require("../models/Graduate");

const graduateController = {
  createGraduate: async (req, res) => {
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
        currentYear,
        educationLevel,
        majorField,
        expectedGraduateYear,
      } = req.body;
      const graduate = new Graduate(
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
        currentYear,
        educationLevel,
        majorField,
        expectedGraduateYear,
      );
      const graduateId = await Graduate.createGraduate(graduate);
      res.status(201).json({ graduateId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateGraduate: async (req, res) => {
    try {
      const { id } = req.params;
      const graduateData = req.body;
      const updated = await Graduate.updateGraduate(id, graduateData);
      if (updated) {
        res.status(200).json({ message: "Graduate updated successfully" });
      } else {
        res.status(404).json({ error: "Graduate not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteGraduate: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Graduate.deleteGraduate(id);
      if (deleted) {
        res.status(200).json({ message: "Graduate deleted successfully" });
      } else {
        res.status(404).json({ error: "Graduate not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getGraduateById: async (req, res) => {
    try {
      const { id } = req.params;
      const graduate = await Graduate.getGraduateById(id);
      if (graduate) {
        res.status(200).json(graduate);
      } else {
        res.status(404).json({ error: "Graduate not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllGraduates: async (req, res) => {
    try {
      const graduates = await Graduate.getAllGraduates();
      res.status(200).json(graduates);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = graduateController;
