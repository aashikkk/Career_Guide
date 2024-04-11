const Event = require("../models/Event");

const eventController = {
  createEvent: async (req, res) => {
    try {
      const { title, date, time, resourcePerson, location } = req.body;
      const event = new Event(
        null,
        title,
        date,
        time,
        resourcePerson,
        location,
      );
      const eventId = await Event.createEvent(event);
      res.status(201).json({ eventId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEvent: async (req, res) => {
    try {
      const { id } = req.params;
      const eventData = req.body;
      const updated = await Event.updateEvent(id, eventData);
      if (updated) {
        res.status(200).json({ message: "Event updated successfully" });
      } else {
        res.status(404).json({ error: "Event not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEvent: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Event.deleteEvent(id);
      if (deleted) {
        res.status(200).json({ message: "Event deleted successfully" });
      } else {
        res.status(404).json({ error: "Event not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEventById: async (req, res) => {
    try {
      const { id } = req.params;
      const event = await Event.getEventById(id);
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ error: "Event not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllEvents: async (req, res) => {
    try {
      const events = await Event.getAllEvents();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = eventController;
