const Event = require("../models/Event");

const eventController = {
	createEvent: async (req, res) => {
		const { title, date, time, resourcePerson, location } = req.body;

		try {
			await Event.createEvent(title, date, time, resourcePerson, location);
			res.status(201).json({ message: "Event created successfully" });
		} catch (error) {
			console.error("Error creating event:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	updateEventById: async (req, res) => {
		const { id } = req.params;
		const eventData = req.body;

		try {
			await Event.updateEventById(id, eventData);
			res.status(200).json({ message: "Event updated successfully" });
		} catch (error) {
			res.status(404).json({ error: "Event not found" });
			res.status(500).json({ error: error.message });
		}
	},

	deleteEventById: async (req, res) => {
		const { id } = req.params;

		try {
			await Event.deleteEventById(id);
			res.status(200).json({ message: "Event deleted successfully" });
		} catch (error) {
			res.status(404).json({ error: "Event not found" });
			res.status(500).json({ error: error.message });
		}
	},

	getEventById: async (req, res) => {
		const { id } = req.params;

		try {
			const event = await Event.getEventById(id);
			res.status(200).json(event);
		} catch (error) {
			res.status(404).json({ error: "Event not found" });
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
