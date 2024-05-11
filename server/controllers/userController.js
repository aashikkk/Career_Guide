const userModel = require("../models/User");

const userController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await userModel.getAllUsers();
			res.status(200).json(users);
		} catch (error) {
			console.error("Error fetching users:", error);
			res.status(500).json({ error: "Error fetching users" });
		}
	},

	getUserByUsername: async (req, res) => {
		const { username } = req.params;
		try {
			const user = await userModel.getUserByUsername(username);
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}
			res.status(200).json(user);
		} catch (error) {
			console.error("Error fetching user:", error);
			res.status(500).json({ error: "Error fetching user" });
		}
	},

	getUserByCategory: async (req, res) => {
		const { category } = req.params;
		try {
			const users = await userModel.getUserByCategory(category);
			res.status(200).json(users);
		} catch (error) {
			console.error("Error fetching users by category:", error);
			res.status(500).json({ error: "Error fetching users by category" });
		}
	},

	updateUserByIdOfCounseller: async (req, res) => {
		const { id } = req.params;
		const updatedFields = req.body;

		try {
			const user = await userModel.getUserByIdOfCounseller(id);
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}

			await userModel.updateUserByIdOfCounseller(id, updatedFields);

			res.status(200).json({ message: "User updated successfully" });
		} catch (error) {
			console.error("Error updating user:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	deleteUserByIdOfCounseller: async (req, res) => {
		const { category, id } = req.params;

		try {
			// Check if the user exists
			const user = await userModel.getUserByIdOfCounseller(id);
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}

			// Delete the user
			await userModel.deleteUserByIdOfCounseller(id);
			res.status(200).json({ message: "User deleted successfully" });
		} catch (error) {
			console.error("Error deleting user:", error);
			res.status(500).json({ error: "Error deleting user" });
		}
	},

	updateUser: async (req, res) => {
		const { username } = req.params;
		const updatedFields = req.body;

		try {
			await userModel.updateUser(username, updatedFields);
			res.status(200).json({ message: "User updated successfully" });
		} catch (error) {
			console.error("Error updating user:", error);
			res.status(500).json({ error: "Error updating user" });
		}
	},

	deleteUser: async (req, res) => {
		const { username } = req.params;
		try {
			await userModel.deleteUser(username);
			res.status(200).json({ message: "User deleted successfully" });
		} catch (error) {
			console.error("Error deleting user:", error);
			res.status(500).json({ error: "Error deleting user" });
		}
	},
};

module.exports = userController;
