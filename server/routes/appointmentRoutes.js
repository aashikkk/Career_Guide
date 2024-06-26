const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

router.post("/", appointmentController.createAppointment);
router.put("/:id", appointmentController.updateAppointment);
router.delete("/:id", appointmentController.deleteAppointment);
router.get("/byId/:id", appointmentController.getAppointmentById);
router.get(
	"/byAttendee/:attendeeUser",
	appointmentController.getAppointmentByAttendee
);
router.get("/", appointmentController.getAllAppointments);

module.exports = router;
