const db = require("../db");

const event = {
	getAllEvents: async () => {
		try {
			const [events] = await db.promise().query("SELECT * FROM Event");
			return events;
		} catch (error) {
			throw error;
		}
	},

	createEvent: async (title, date, time, resourcePerson, location) => {
		try {
			// Insert event into database
			const sql =
				"INSERT INTO Event (title, date, time, resourcePerson, location) VALUES (?, ?, ?, ?, ?)";
			await db
				.promise()
				.query(sql, [title, date, time, resourcePerson, location]);

			return { message: "Event created successfully" };
		} catch (error) {
			throw error;
		}
	},

	getEventById: async (eventId) => {
		try {
			const [event] = await db
				.promise()
				.query("SELECT * FROM Event WHERE id = ?", [eventId]);
			return event[0]; // Assuming event ID is unique
		} catch (error) {
			throw error;
		}
	},

	updateEventById: async (eventId, updatedFields) => {
		try {
			const updateQuery =
				"UPDATE Event SET " +
				Object.keys(updatedFields)
					.map((key) => `${key} = ?`)
					.join(", ") +
				" WHERE id = ?";
			const updateValues = [...Object.values(updatedFields), eventId];
			await db.promise().query(updateQuery, updateValues);
		} catch (error) {
			throw error;
		}
	},

	deleteEventById: async (eventId) => {
		try {
			await db.promise().query("DELETE FROM Event WHERE id = ?", [eventId]);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = event;
