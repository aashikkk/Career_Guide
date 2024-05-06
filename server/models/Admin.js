const db = require("../db");

class Admin {
	constructor(id, name, username, email, password) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	static async createAdmin(admin) {
		return new Promise((resolve, reject) => {
			const { name, username, email, password } = admin;
			db.query(
				"INSERT INTO Admin (name, username, email, password) VALUES (?, ?, ?, ?, )",
				[name, username, email, password],
				(error, results) => {
					if (error) {
						return reject(error);
					}
					resolve(results.insertId);
				}
			);
		});
	}

	static async updateAdmin(username, updatedData) {
		return new Promise((resolve, reject) => {
			db.query(
				"UPDATE Admin SET ? WHERE username = ?",
				[updatedData, username],
				(error, results) => {
					if (error) {
						return reject(error);
					}
					resolve(results.affectedRows > 0);
				}
			);
		});
	}

	static async deleteAdmin(username) {
		return new Promise((resolve, reject) => {
			db.query(
				"DELETE FROM Admin WHERE username = ?",
				[username],
				(error, results) => {
					if (error) {
						return reject(error);
					}
					resolve(results.affectedRows > 0);
				}
			);
		});
	}

	static async getAdminByUsername(username) {
		return new Promise((resolve, reject) => {
			db.query(
				"SELECT * FROM Admin WHERE username = ?",
				[username],
				(error, results) => {
					if (error) {
						return reject(error);
					}
					if (results.length === 0) {
						resolve(null);
					} else {
						const adminData = results[0];
						const admin = new Admin(
							adminData.id,
							adminData.name,
							adminData.username,
							adminData.email,
							adminData.nic,
							adminData.age,
							adminData.password
						);
						resolve(admin);
					}
				}
			);
		});
	}
}

module.exports = Admin;
