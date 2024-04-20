const Job = require("../models/Job");

const jobController = {
  createJob: async (req, res) => {
    try {
      const { jobTitle, type, company, location } = req.body;
      const job = new Job(null, jobTitle, type, company, location);
      const jobId = await Job.createJob(job);
      res.status(201).json({ jobId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateJob: async (req, res) => {
    try {
      const { id } = req.params;
      const jobData = req.body;
      const updated = await Job.updateJob(id, jobData);
      if (updated) {
        res.status(200).json({ message: "Job updated successfully" });
      } else {
        res.status(404).json({ error: "Job not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteJob: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Job.deleteJob(id);
      if (deleted) {
        res.status(200).json({ message: "Job deleted successfully" });
      } else {
        res.status(404).json({ error: "Job not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getJobById: async (req, res) => {
    try {
      const { id } = req.params;
      const job = await Job.getJobById(id);
      if (job) {
        res.status(200).json(job);
      } else {
        res.status(404).json({ error: "Job not found" });
      }
    } catch (error) {
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
