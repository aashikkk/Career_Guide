const bcrypt = require("bcrypt");
const db = require("../db");

const saltRounds = 10;

async function registerUser(req, res) {
    const { name, username, phoneNumber, email, nic, password, category } =
        req.body;

    try {
        // Check if user already exists
        const [existingUser] = await db
            .promise()
            .query(
                "SELECT * FROM users WHERE username = ? OR email = ? OR nic = ?",
                [username, email, nic]
            );
        if (existingUser.length > 0) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert user into database
        await db
            .promise()
            .query(
                "INSERT INTO users (name, username, phoneNumber, email, nic, password, category) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [
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

module.exports = { registerUser };
