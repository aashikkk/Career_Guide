const Job = require("../models/Job");

const jobController = {
	createJob: async (req, res) => {
		const { jobTitle, type, company, location, description } = req.body;

		try {
			const newJob = await Job.create({
				jobTitle,
				type,
				company,
				location,
				description,
			});
			res.status(201).json({
				message: "Job created successfully",
				job: newJob,
			});
		} catch (error) {
			console.error("Error creating job:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	updateJobById: async (req, res) => {
		const { id } = req.params;
		const jobData = req.body;

		try {
			const job = await Job.findByPk(id);
			if (!job) {
				return res.status(404).json({ error: "Job not found" });
			}
			const updatedJob = await job.update(jobData);
			res.status(200).json({
				message: "Job updated successfully",
				job: updatedJob,
			});
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	deleteJobById: async (req, res) => {
		const { id } = req.params;

		try {
			const job = await Job.findByPk(id);
			if (!job) {
				return res.status(404).json({ error: "Job not found" });
			}
			await job.destroy();
			res.status(200).json({ message: "Job deleted successfully" });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getJobById: async (req, res) => {
		const { id } = req.params;

		try {
			const job = await Job.findByPk(id);
			if (!job) {
				return res.status(404).json({ error: "Job not found" });
			}
			res.status(200).json(job);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getAllJobs: async (req, res) => {
		try {
			const jobs = await Job.findAll();
			res.status(200).json(jobs);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = jobController;
