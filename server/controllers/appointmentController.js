const Appointment = require("../models/Appointment");

const appointmentController = {
  createAppointment: async (req, res) => {
    try {
      const { date_time, resourcePerson, attendee_user } = req.body;
      const appointment = new Appointment(
        null,
        date_time,
        resourcePerson,
        attendee_user,
      );
      const appointmentId = await Appointment.createAppointment(appointment);
      res.status(201).json({ appointmentId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateAppointment: async (req, res) => {
    try {
      const { id } = req.params;
      const appointmentData = req.body;
      const updated = await Appointment.updateAppointment(id, appointmentData);
      if (updated) {
        res.status(200).json({ message: "Appointment updated successfully" });
      } else {
        res.status(404).json({ error: "Appointment not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteAppointment: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Appointment.deleteAppointment(id);
      if (deleted) {
        res.status(200).json({ message: "Appointment deleted successfully" });
      } else {
        res.status(404).json({ error: "Appointment not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAppointmentById: async (req, res) => {
    try {
      const { id } = req.params;
      const appointment = await Appointment.getAppointmentById(id);
      if (appointment) {
        res.status(200).json(appointment);
      } else {
        res.status(404).json({ error: "Appointment not found" });
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
