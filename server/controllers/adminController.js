const Admin = require("../models/Admin");

const adminController = {
	createAdmin: async (req, res) => {
		try {
			const { name, username, email, password } = req.body;
			const admin = new Admin(name, username, email, password);
			const adminId = await Admin.createAdmin(admin);
			res.status(201).json({ adminId });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	updateAdmin: async (req, res) => {
		try {
			const { id } = req.params;
			const adminData = req.body;
			const updated = await Admin.updateAdmin(id, adminData);
			if (updated) {
				res.status(200).json({ message: "Admin updated successfully" });
			} else {
				res.status(404).json({ error: "Admin not found" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	deleteAdmin: async (req, res) => {
		try {
			const { id } = req.params;
			const deleted = await Admin.deleteAdmin(id);
			if (deleted) {
				res.status(200).json({ message: "Admin deleted successfully" });
			} else {
				res.status(404).json({ error: "Admin not found" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getAdminById: async (req, res) => {
		try {
			const { id } = req.params;
			const admin = await Admin.getAdminById(id);
			if (admin) {
				res.status(200).json(admin);
			} else {
				res.status(404).json({ error: "Admin not found" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getAllAdmins: async (req, res) => {
		try {
			const admins = await Admin.getAllAdmins();
			res.status(200).json(admins);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = adminController;
