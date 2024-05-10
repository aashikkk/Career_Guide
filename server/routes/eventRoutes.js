const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.post("/", eventController.createEvent);
router.put("/:id", eventController.updateEventById);
router.delete("/:id", eventController.deleteEventById);
router.get("/:id", eventController.getEventById);
router.get("/", eventController.getAllEvents);

module.exports = router;
