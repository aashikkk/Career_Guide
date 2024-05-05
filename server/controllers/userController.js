const Users = require("../models/User");

const userController = {
	createUser: async (req, res) => {
		try {
			const userData = req.body;
			const user = new Users(userData);
			const userId = await Users.createUser(user);
			res.status(201).json({ userId });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	updateUser: async (req, res) => {
		try {
			const { id } = req.params;
			const userData = req.body;
			const updated = await Users.updateUser(id, userData);
			if (updated) {
				res.status(200).json({ message: "User updated successfully" });
			} else {
				res.status(404).json({ error: "User not found" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	deleteUser: async (req, res) => {
		try {
			const { id } = req.params;
			const deleted = await Users.deleteUser(id);
			if (deleted) {
				res.status(200).json({ message: "User deleted successfully" });
			} else {
				res.status(404).json({ error: "User not found" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getUserById: async (req, res) => {
		try {
			const { id } = req.params;
			const user = await Users.getUserById(id);
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({ error: "User not found" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getUsersByCategory: async (req, res) => {
		try {
			const { category } = req.params;
			const users = await Users.getUsersByCategory(category);
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getAllUsers: async (req, res) => {
		try {
			const users = await Users.getAllUsers();
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = userController;
