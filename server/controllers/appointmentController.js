const Appointment = require("../models/Appointment");

const appointmentController = {
  createAppointment: async (req, res) => {
    const { date, time, resourcePerson, attendeeUser } = req.body;

    try {
      const newAppointment = await Appointment.create({
        date,
        time,
        resourcePerson,
        attendeeUser,
      });
      res.status(201).json({
        message: "Appointment created successfully",
        appointment: newAppointment,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateAppointment: async (req, res) => {
    const { id } = req.params;
    const appointmentData = req.body;

    try {
      const appointment = await Appointment.findByPk(id);
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }

      const updatedAppointment = await appointment.update(appointmentData);
      res.status(200).json({
        message: "Appointment updated successfully",
        appointment: updatedAppointment,
      });
    } catch (error) {
      console.error("Error updating appointment:", error);

      res.status(500).json({ error: error.message });
    }
  },

  deleteAppointment: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await Appointment.destroy({
        where: { id },
      });
      if (result === 0) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAppointmentById: async (req, res) => {
    const { id } = req.params;

    try {
      const appointment = await Appointment.findByPk(id);
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      res.status(200).json(appointment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAppointmentByAttendee: async (req, res) => {
    const { attendeeUser } = req.params;

    try {
      const appointments = await Appointment.findAll({
        where: { attendeeUser },
      });
      if (appointments.length === 0) {
        return res
          .status(404)
          .json({ error: "No appointments found for this attendee" });
      }
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllAppointments: async (req, res) => {
    try {
      const appointments = await Appointment.findAll();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = appointmentController;
