const db = require("../db");

class User {
	constructor(
		id,
		name,
		username,
		phoneNumber,
		emailAddress,
		highestQualifications,
		category,
		nic,
		age,
		password,
		grade,
		currentYear,
		educationLevel,
		majorField,
		expectedGraduateYear
	) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.phoneNumber = phoneNumber;
		this.emailAddress = emailAddress;
		this.highestQualifications = highestQualifications;
		this.category = category;
		this.nic = nic;
		this.age = age;
		this.password = password;
		this.grade = grade;
		this.currentYear = currentYear;
		this.educationLevel = educationLevel;
		this.majorField = majorField;
		this.expectedGraduateYear = expectedGraduateYear;
	}

	static async getAllUsers() {
		return new Promise((resolve, reject) => {
			db.query("SELECT * FROM users", (error, results) => {
				if (error) {
					return reject(error);
				}
				resolve(
					results.map(
						(row) =>
							new User(
								row.id,
								row.name,
								row.username,
								row.phoneNumber,
								row.emailAddress,
								row.highestQualifications,
								row.category,
								row.nic,
								row.age,
								row.password,
								row.grade,
								row.currentYear,
								row.educationLevel,
								row.majorField,
								row.expectedGraduateYear
							)
					)
				);
			});
		});
	}

	static async createUser(user) {
		return new Promise((resolve, reject) => {
			const {
				name,
				username,
				phoneNumber,
				emailAddress,
				highestQualifications,
				category,
				nic,
				age,
				password,
				grade,
				currentYear,
				educationLevel,
				majorField,
				expectedGraduateYear,
			} = user;
			db.query(
				"INSERT INTO users (name, username, phoneNumber, emailAddress, highestQualifications, category, nic, age, password, grade, currentYear, educationLevel, majorField, expectedGraduateYear) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				[
					name,
					username,
					phoneNumber,
					emailAddress,
					highestQualifications,
					category,
					nic,
					age,
					password,
					grade,
					currentYear,
					educationLevel,
					majorField,
					expectedGraduateYear,
				],
				(error, results) => {
					if (error) {
						return reject(error);
					}
					resolve(results.insertId);
				}
			);
		});
	}

	static async updateUser(id, updatedData) {
		return new Promise((resolve, reject) => {
			db.query(
				"UPDATE users SET ? WHERE id = ?",
				[updatedData, id],
				(error, results) => {
					if (error) {
						return reject(error);
					}
					resolve(results.affectedRows > 0);
				}
			);
		});
	}

	static async deleteUser(id) {
		return new Promise((resolve, reject) => {
			db.query("DELETE FROM users WHERE id = ?", [id], (error, results) => {
				if (error) {
					return reject(error);
				}
				resolve(results.affectedRows > 0);
			});
		});
	}

	static async getUserById(id) {
		return new Promise((resolve, reject) => {
			db.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => {
				if (error) {
					return reject(error);
				}
				if (results.length === 0) {
					resolve(null);
				} else {
					const row = results[0];
					const user = new User(
						row.id,
						row.name,
						row.username,
						row.phoneNumber,
						row.emailAddress,
						row.highestQualifications,
						row.category,
						row.nic,
						row.age,
						row.password,
						row.grade,
						row.currentYear,
						row.educationLevel,
						row.majorField,
						row.expectedGraduateYear
					);
					resolve(user);
				}
			});
		});
	}

	static async getUsersByCategory(category) {
		return new Promise((resolve, reject) => {
			db.query(
				"SELECT * FROM users WHERE category = ?",
				[category],
				(error, results) => {
					if (error) {
						return reject(error);
					}
					resolve(
						results.map(
							(row) =>
								new User(
									row.id,
									row.name,
									row.username,
									row.phoneNumber,
									row.emailAddress,
									row.highestQualifications,
									row.category,
									row.nic,
									row.age,
									row.password,
									row.grade,
									row.currentYear,
									row.educationLevel,
									row.majorField,
									row.expectedGraduateYear
								)
						)
					);
				}
			);
		});
	}
}

module.exports = User;
