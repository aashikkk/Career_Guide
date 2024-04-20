const ResourcePerson = require("../models/ResourcePerson");

const resourcePersonController = {
  createResourcePerson: async (req, res) => {
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
        workExperience,
        referees,
      } = req.body;
      const resourcePerson = new ResourcePerson(
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
        workExperience,
        referees,
      );
      const resourceId =
        await ResourcePerson.createResourcePerson(resourcePerson);
      res.status(201).json({ resourceId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateResourcePerson: async (req, res) => {
    try {
      const { id } = req.params;
      const resourcePersonData = req.body;
      const updated = await ResourcePerson.updateResourcePerson(
        id,
        resourcePersonData,
      );
      if (updated) {
        res
          .status(200)
          .json({ message: "Resource person updated successfully" });
      } else {
        res.status(404).json({ error: "Resource person not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteResourcePerson: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await ResourcePerson.deleteResourcePerson(id);
      if (deleted) {
        res
          .status(200)
          .json({ message: "Resource person deleted successfully" });
      } else {
        res.status(404).json({ error: "Resource person not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getResourcePersonById: async (req, res) => {
    try {
      const { id } = req.params;
      const resourcePerson = await ResourcePerson.getResourcePersonById(id);
      if (resourcePerson) {
        res.status(200).json(resourcePerson);
      } else {
        res.status(404).json({ error: "Resource person not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllResourcePersons: async (req, res) => {
    try {
      const resourcePersons = await ResourcePerson.getAllResourcePersons();
      res.status(200).json(resourcePersons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = resourcePersonController;
