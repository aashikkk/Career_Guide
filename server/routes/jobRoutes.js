const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

router.post("/", jobController.createJob);
router.put("/:id", jobController.updateJobById);
router.delete("/:id", jobController.deleteJobById);
router.get("/:id", jobController.getJobById);
router.get("/", jobController.getAllJobs);

module.exports = router;
