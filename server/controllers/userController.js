const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await User.findAll();
			res.status(200).json(users);
		} catch (error) {
			console.error("Error fetching users:", error);
			res.status(500).json({ error: "Error fetching users" });
		}
	},

	getUserByUsername: async (req, res) => {
		const { username } = req.params;
		try {
			const user = await User.findOne({ where: { username } });
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}
			res.status(200).json(user);
		} catch (error) {
			console.error("Error fetching user:", error);
			res.status(500).json({ error: "Error fetching user" });
		}
	},

	createCounseller: async (req, res) => {
		const {
			name,
			username,
			phoneNumber,
			email,
			nic,
			password,
			educationLevel,
			highestQualifications,
			majorField,
			specialization,
		} = req.body;

		const hashedPassword = await bcrypt.hash(password, saltRounds);

		try {
			const newCounseller = await User.create({
				name,
				username,
				phoneNumber,
				email,
				nic,
				password: hashedPassword,
				educationLevel,
				highestQualifications,
				majorField,
				specialization,
				category: "Counseller",
			});
			res.status(201).json({
				message: "Counseller registered successfully",
			});
		} catch (error) {
			console.error("Error registering user:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	getUserByCategory: async (req, res) => {
		const { category } = req.params;
		try {
			const users = await User.findAll({ where: { category } });
			res.status(200).json(users);
		} catch (error) {
			console.error("Error fetching users by category:", error);
			res.status(500).json({ error: "Error fetching users by category" });
		}
	},

	getUserById: async (req, res) => {
		const { id } = req.params;
		try {
			const user = await User.findByPk(id);
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}
			res.status(200).json(user);
		} catch (error) {
			console.error("Error fetching user by ID:", error);
			res.status(500).json({ error: "Error fetching user" });
		}
	},

	updateUserByIdOfCounseller: async (req, res) => {
		const { id } = req.params;
		const updatedFields = req.body;

		try {
			const user = await User.findOne({
				where: { id, category: "Counseller" },
			});
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}

			await user.update(updatedFields);
			res.status(200).json({ message: "User updated successfully" });
		} catch (error) {
			console.error("Error updating user:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	deleteUserByIdOfCounseller: async (req, res) => {
		const { id } = req.params;

		try {
			const user = await User.findByPk(id);
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}

			await user.destroy();
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
			const user = await User.findOne({ where: { username } });
			await user.update(updatedFields);
			res.status(200).json({ message: "User updated successfully" });
		} catch (error) {
			console.error("Error updating user:", error);
			res.status(500).json({ error: "Error updating user" });
		}
	},

	updateUserById: async (req, res) => {
		const { id } = req.params;
		const updatedFields = req.body;

		try {
			const user = await User.findOne({ where: { id } });
			await user.update(updatedFields);
			res.status(200).json({ message: "User updated successfully" });
		} catch (error) {
			console.error("Error updating user:", error);
			res.status(500).json({ error: "Error updating user" });
		}
	},

	deleteUser: async (req, res) => {
		const { username } = req.params;
		try {
			const user = await User.findOne({ where: { username } });
			await user.destroy();
			res.status(200).json({ message: "User deleted successfully" });
		} catch (error) {
			console.error("Error deleting user:", error);
			res.status(500).json({ error: "Error deleting user" });
		}
	},

	deleteUserById: async (req, res) => {
		const { id } = req.params;
		try {
			const user = await User.findOne({ where: { id } });
			await user.destroy();
			res.status(200).json({ message: "User deleted successfully" });
		} catch (error) {
			console.error("Error deleting user:", error);
			res.status(500).json({ error: "Error deleting user" });
		}
	},
};

module.exports = userController;
