const db = require("../db");

const user = {
	getAllUsers: async () => {
		try {
			const [users] = await db.promise().query("SELECT * FROM Users");
			return users;
		} catch (error) {
			throw error;
		}
	},

	getUserByUsername: async (username) => {
		try {
			const [user] = await db
				.promise()
				.query("SELECT * FROM Users WHERE username = ?", [username]);
			return user[0]; // Assuming username is unique
		} catch (error) {
			throw error;
		}
	},

	getUserByCategory: async (category) => {
		try {
			const [users] = await db
				.promise()
				.query("SELECT * FROM Users WHERE category = ?", [category]);
			return users;
		} catch (error) {
			throw error;
		}
	},

	updateUser: async (username, updatedFields) => {
		try {
			const updateQuery =
				"UPDATE Users SET " +
				Object.keys(updatedFields)
					.map((key) => `${key} = ?`)
					.join(", ") +
				" WHERE username = ?";
			const updateValues = [...Object.values(updatedFields), username];
			await db.promise().query(updateQuery, updateValues);
		} catch (error) {
			throw error;
		}
	},

	deleteUser: async (username) => {
		try {
			await db
				.promise()
				.query("DELETE FROM Users WHERE username = ?", [username]);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = user;
