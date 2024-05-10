const db = require("../db");

const Appointment = {
	getAllAppointments: async () => {
		try {
			const [appointments] = await db
				.promise()
				.query("SELECT * FROM Appointment");
			return appointments;
		} catch (error) {
			throw error;
		}
	},

	createAppointment: async (date, time, resourcePerson, attendeeUser) => {
		try {
			// Insert appointment into database
			const sql =
				"INSERT INTO Appointment (date, time, resourcePerson, attendeeUser) VALUES (?, ?, ?, ?)";
			await db.promise().query(sql, [date, time, resourcePerson, attendeeUser]);
			return { message: "Appointment created successfully" };
		} catch (error) {
			throw error;
		}
	},

	getAppointmentsByAttendee: async (attendeeUser) => {
		try {
			const [appointments] = await db
				.promise()
				.query("SELECT * FROM Appointment WHERE attendeeUser = ?", [
					attendeeUser,
				]);
			return appointments;
		} catch (error) {
			throw error;
		}
	},

	getAppointmentById: async (appointmentId) => {
		try {
			const [appointments] = await db
				.promise()
				.query("SELECT * FROM Appointment WHERE id = ?", [appointmentId]);
			return appointments[0];
		} catch (error) {
			throw error;
		}
	},

	updateAppointmentById: async (appointmentId, updatedFields) => {
		try {
			const updateQuery =
				"UPDATE Appointment SET " +
				Object.keys(updatedFields)
					.map((key) => `${key} = ?`)
					.join(", ") +
				" WHERE id = ?";
			const updateValues = [...Object.values(updatedFields), appointmentId];
			await db.promise().query(updateQuery, updateValues);
		} catch (error) {
			throw error;
		}
	},

	deleteAppointmentById: async (appointmentId) => {
		try {
			await db
				.promise()
				.query("DELETE FROM Appointment WHERE id = ?", [appointmentId]);
		} catch (error) {
			throw error;
		}
	},
};
module.exports = Appointment;
