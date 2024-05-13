const Event = require("../models/Event");

const eventController = {
    createEvent: async (req, res) => {
        const { title, date, time, resourcePerson, location } = req.body;

        try {
            const newEvent = await Event.create({
                title,
                date,
                time,
                resourcePerson,
                location,
            });
            res.status(201).json({
                message: "Event created successfully",
                event: newEvent,
            });
        } catch (error) {
            console.error("Error creating event:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    },

    updateEventById: async (req, res) => {
        const { id } = req.params;
        const eventData = req.body;

        try {
            const event = await Event.findByPk(id);
            if (!event) {
                return res.status(404).json({ error: "Event not found" });
            }
            const updatedEvent = await event.update(eventData);
            res.status(200).json({
                message: "Event updated successfully",
                event: updatedEvent,
            });
        } catch (error) {
            console.error("Error updating event:", error);
            res.status(500).json({ error: error.message });
        }
    },

    deleteEventById: async (req, res) => {
        const { id } = req.params;

        try {
            const event = await Event.findByPk(id);
            if (!event) {
                return res.status(404).json({ error: "Event not found" });
            }
            await event.destroy();
            res.status(200).json({ message: "Event deleted successfully" });
        } catch (error) {
            console.error("Error deleting event:", error);
            res.status(500).json({ error: error.message });
        }
    },

    getEventById: async (req, res) => {
        const { id } = req.params;

        try {
            const event = await Event.findByPk(id);
            if (!event) {
                return res.status(404).json({ error: "Event not found" });
            }
            res.status(200).json(event);
        } catch (error) {
            console.error("Error fetching event:", error);
            res.status(500).json({ error: error.message });
        }
    },

    getAllEvents: async (req, res) => {
        try {
            const events = await Event.findAll();
            res.status(200).json(events);
        } catch (error) {
            console.error("Error fetching events:", error);
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = eventController;
