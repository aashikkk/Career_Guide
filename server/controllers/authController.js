const bcrypt = require("bcrypt");
const db = require("../db");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const generateAccessToken = (userId) => {
	return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

async function registerUser(req, res) {
	const { name, username, phoneNumber, email, nic, password, category } =
		req.body;

	try {
		// Check if user already exists
		const [existingUser] = await db
			.promise()
			.query("SELECT * FROM Users WHERE username = ? OR email = ? OR nic = ?", [
				username,
				email,
				nic,
			]);
		if (existingUser.length > 0) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		// Insert user into database
		await db
			.promise()
			.query(
				"INSERT INTO Users (id, name, username, phoneNumber, email, nic, password, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
				[
					uuidv4(),
					name,
					username,
					phoneNumber,
					email,
					nic,
					hashedPassword,
					category,
				]
			);

		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		console.error("Error registering user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}

async function loginUser(req, res) {
	const { username, password } = req.body;

	try {
		// Fetch user from database
		const [user] = await db
			.promise()
			.query("SELECT * FROM Users WHERE username = ?", [username]);
		if (user.length === 0) {
			return res.status(401).json({ error: "Invalid username or password" });
		}

		// Check password
		const passwordMatch = await bcrypt.compare(password, user[0].password);
		if (!passwordMatch) {
			return res.status(401).json({ error: "Invalid username or password" });
		}

		// User authenticated successfully, generate JWT token
		const token = generateAccessToken(user[0].id);

		res.status(200).json({ message: "Login successful", token });
	} catch (error) {
		console.error("Error logging in:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}

module.exports = { registerUser, loginUser };
