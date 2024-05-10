const Appointment = require("../models/Appointment");

const appointmentController = {
	createAppointment: async (req, res) => {
		const { date, time, resourcePerson, attendeeUser } = req.body;

		try {
			await Appointment.createAppointment(
				date,
				time,
				resourcePerson,
				attendeeUser
			);
			res.status(201).json({ message: "Appointment created successfully" });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	updateAppointment: async (req, res) => {
		const { id } = req.params;
		const appointmentData = req.body;
		try {
			await Appointment.updateAppointmentById(id, appointmentData);
			res.status(200).json({ message: "Appointment updated successfully" });
		} catch (error) {
			res.status(404).json({ error: "Appointment not found" });
			res.status(500).json({ error: error.message });
		}
	},

	deleteAppointment: async (req, res) => {
		const { id } = req.params;

		try {
			await Appointment.deleteAppointmentById(id);
			res.status(200).json({ message: "Appointment deleted successfully" });
		} catch (error) {
			res.status(404).json({ error: "Appointment not found" });
			res.status(500).json({ error: error.message });
		}
	},

	getAppointmentById: async (req, res) => {
		const { id } = req.params;

		try {
			const appointment = await Appointment.getAppointmentById(id);
			res.status(200).json(appointment);
		} catch (error) {
			res.status(404).json({ error: "Appointment not found" });
			res.status(500).json({ error: error.message });
		}
	},

	getAppointmentByAttendee: async (req, res) => {
		const { attendeeUser } = req.params;

		try {
			const appointments = await Appointment.getAppointmentsByAttendee(
				attendeeUser
			);
			if (appointments.length === 0) {
				res
					.status(404)
					.json({ error: "No appointments found for this attendee" });
			} else {
				res.status(200).json(appointments);
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getAllAppointments: async (req, res) => {
		try {
			const appointments = await Appointment.getAllAppointments();
			res.status(200).json(appointments);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = appointmentController;
