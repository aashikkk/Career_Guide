const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

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
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        // Check password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid password" });
        } else {
            // User authenticated successfully, generate JWT token
            const token = generateAccessToken(user.id);
            res.status(200).json({
                message: "Login successful",
                token,
                category: user.category,
            });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

//Authentication Middleware using JWT

async function authenticate(req, res, next) {
    const token = req.header("Authorization");
    console.log("Unextracted Token: " + token);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const extractedToken = token.split(" ")[1];
    console.log("Actual Token: " + extractedToken);

    try {
        // Verify and validate our token
        const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid Token" });
    }
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
};
