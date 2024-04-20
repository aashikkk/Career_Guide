const Undergraduate = require("../models/Undergraduate");

const undergraduateController = {
  createUndergraduate: async (req, res) => {
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
      const undergraduate = new Undergraduate(
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
      const undergraduateId =
        await Undergraduate.createUndergraduate(undergraduate);
      res.status(201).json({ undergraduateId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUndergraduate: async (req, res) => {
    try {
      const { id } = req.params;
      const undergraduateData = req.body;
      const updated = await Undergraduate.updateUndergraduate(
        id,
        undergraduateData,
      );
      if (updated) {
        res.status(200).json({ message: "Undergraduate updated successfully" });
      } else {
        res.status(404).json({ error: "Undergraduate not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUndergraduate: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Undergraduate.deleteUndergraduate(id);
      if (deleted) {
        res.status(200).json({ message: "Undergraduate deleted successfully" });
      } else {
        res.status(404).json({ error: "Undergraduate not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUndergraduateById: async (req, res) => {
    try {
      const { id } = req.params;
      const undergraduate = await Undergraduate.getUndergraduateById(id);
      if (undergraduate) {
        res.status(200).json(undergraduate);
      } else {
        res.status(404).json({ error: "Undergraduate not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllUndergraduates: async (req, res) => {
    try {
      const undergraduates = await Undergraduate.getAllUndergraduates();
      res.status(200).json(undergraduates);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = undergraduateController;
