const Job = require("../models/Job");

const jobController = {
	createJob: async (req, res) => {
		const { jobTitle, type, company, location } = req.body;

		try {
			await Job.createJob(jobTitle, type, company, location);
			res.status(201).json({ message: "Job created successfully" });
		} catch (error) {
			console.error("Error creating job:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	updateJobById: async (req, res) => {
		const { id } = req.params;
		const jobData = req.body;

		try {
			await Job.updateJobById(id, jobData);
			res.status(200).json({ message: "Job updated successfully" });
		} catch (error) {
			res.status(404).json({ error: "Job not found" });
			res.status(500).json({ error: error.message });
		}
	},

	deleteJobById: async (req, res) => {
		const { id } = req.params;

		try {
			await Job.deleteJobById(id);
			res.status(200).json({ message: "Job deleted successfully" });
		} catch (error) {
			res.status(404).json({ error: "Job not found" });
			res.status(500).json({ error: error.message });
		}
	},

	getJobById: async (req, res) => {
		const { id } = req.params;

		try {
			const job = await Job.getJobById(id);
			res.status(200).json(job);
		} catch (error) {
			res.status(404).json({ error: "Job not found" });
			res.status(500).json({ error: error.message });
		}
	},

	getAllJobs: async (req, res) => {
		try {
			const jobs = await Job.getAllJobs();
			res.status(200).json(jobs);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = jobController;
