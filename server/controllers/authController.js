const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const saltRounds = 10;

const generateAccessToken = (userId) => {
	return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

async function registerUser(req, res) {
	const { name, username, phoneNumber, email, nic, password, category } =
		req.body;

	try {
		// Check if user already exists
		const existingUser = await User.findOne({
			where: {
				[Op.or]: [{ username }, { email }, { nic }],
			},
		});
		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		// Insert user into database
		const newUser = await User.create({
			name,
			username,
			phoneNumber,
			email,
			nic,
			password: hashedPassword,
			category,
		});

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
		const user = await User.findOne({
			where: { username },
		});

		if (!username || !password) {
			return res
				.status(400)
				.json({ message: "Username and Password are Required" });
		}

		if (!user) {
			return res.status(401).json({ error: "Invalid username or password" });
		}

		// Check password
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ error: "Invalid password" });
		} else {
			// User authenticated successfully, generate JWT token
			const name = user.name;
			const token = generateAccessToken(user.id);
			res.cookie("token", token, { httpOnly: true, secure: true });
			res.status(200).json({
				message: "Login successful",
				token,
				category: user.category,
				name: name,
			});
		}
	} catch (error) {
		console.error("Error logging in:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}

//Authentication Middleware using JWT

async function authenticate(req, res, next) {
	const authHeader = req.headers.authorization;
	console.log("Authorization Header: " + authHeader);

	if (!authHeader) {
		return res
			.status(401)
			.json({ message: "No authorization header provided" });
	}

	const tokenParts = authHeader.split(" ");

	// Check if the Authorization header is in the 'Bearer token' format
	if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
		return res
			.status(401)
			.json({ message: "Authorization header is not in the correct format" });
	}

	const token = tokenParts[1];
	console.log("Extracted Token: " + token);

	try {
		// Verify and validate the token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded.userId;
		next();
	} catch (err) {
		console.error("Token verification error:", err);

		// Provide more specific messages based on the type of JWT error
		if (err instanceof jwt.JsonWebTokenError) {
			return res.status(401).json({ message: "Invalid Token" });
		} else if (err instanceof jwt.TokenExpiredError) {
			return res.status(401).json({ message: "Token has expired" });
		} else {
			return res.status(500).json({ message: "Error processing token" });
		}
	}
}

async function logout(req, res) {
	res.clearCookie("token");
	res.cookie("token", "", { expires: new Date(0), path: "/" });
	res.status(200).json({ message: "Logout successful" });
}

async function registerAdmin(req, res) {
	const { name, username, email, password } = req.body;

	try {
		// Check if user already exists
		const existingUser = await User.findOne({
			where: {
				[Op.or]: [{ username }, { email }],
			},
		});
		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		// Insert user into database
		const newAdmin = await User.create({
			name,
			username,
			email,
			password: hashedPassword,
			category: "Admin",
		});

		res.status(201).json({ message: "Admin registered successfully" });
	} catch (error) {
		console.error("Error registering admin:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}

async function registerCounseller(req, res) {
	const {
		name,
		username,
		phoneNumber,
		email,
		nic,
		password,
		category,
		specialization,
	} = req.body;

	try {
		// Check if user already exists
		const existingUser = await User.findOne({
			where: {
				[Op.or]: [{ username }, { email }, { nic }],
			},
		});
		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		// Insert user into database
		const newCounseller = await User.create({
			name,
			username,
			phoneNumber,
			email,
			nic,
			password: hashedPassword,
			category: "Counseller",
			specialization,
		});

		res.status(201).json({ message: "Counseller registered successfully" });
	} catch (error) {
		console.error("Error registering user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}

module.exports = {
	registerUser,
	loginUser,
	registerAdmin,
	registerCounseller,
	authenticate,
	logout,
};
