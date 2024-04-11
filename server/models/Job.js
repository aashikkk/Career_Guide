const db = require("../db");

class Job {
  constructor(id, jobTitle, type, company, location) {
    this.id = id;
    this.jobTitle = jobTitle;
    this.type = type;
    this.company = company;
    this.location = location;
  }

  static getAllJobs() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM jobs", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  static createJob(job) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO jobs SET ?", job, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve({ id: results.insertId, ...job });
      });
    });
  }

  static async updateJob(id, updatedJob) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE jobs SET ? WHERE id = ?",
        [updatedJob, id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve({ id: id, ...updatedJob });
        },
      );
    });
  }

  static async deleteJob(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM jobs WHERE id = ?", id, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.affectedRows);
      });
    });
  }
}

module.exports = Job;
