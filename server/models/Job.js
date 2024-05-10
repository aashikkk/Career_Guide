const db = require("../db");

const job = {
	getAllJobs: async () => {
		try {
			const [jobs] = await db.promise().query("SELECT * FROM Job");
			return jobs;
		} catch (error) {
			throw error;
		}
	},

	createJob: async (jobTitle, type, company, location) => {
		try {
			// Insert job into database
			const sql =
				"INSERT INTO Job (jobTitle, type, company, location) VALUES (?, ?, ?, ?)";
			await db.promise().query(sql, [jobTitle, type, company, location]);

			return { message: "Job created successfully" };
		} catch (error) {
			throw error;
		}
	},

	getJobById: async (jobId) => {
		try {
			const [job] = await db
				.promise()
				.query("SELECT * FROM Job WHERE id = ?", [jobId]);
			return job[0]; // Assuming job ID is unique
		} catch (error) {
			throw error;
		}
	},
	updateJobById: async (jobId, updatedFields) => {
		try {
			const updateQuery =
				"UPDATE Job SET " +
				Object.keys(updatedFields)
					.map((key) => `${key} = ?`)
					.join(", ") +
				" WHERE id = ?";
			const updateValues = [...Object.values(updatedFields), jobId];
			await db.promise().query(updateQuery, updateValues);
		} catch (error) {
			throw error;
		}
	},

	deleteJobById: async (jobId) => {
		try {
			await db.promise().query("DELETE FROM Job WHERE id = ?", [jobId]);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = job;
