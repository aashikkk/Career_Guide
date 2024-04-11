const bcrypt = require("bcrypt");
const db = require("../db");

async function loginUser(req, res) {
    const { username, password } = req.body;

    try {
        // Fetch user from database
        const [user] = await db
            .promise()
            .query("SELECT * FROM users WHERE username = ?", [username]);
        if (user.length === 0) {
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        // Check password
        const passwordMatch = await bcrypt.compare(password, user[0].password);
        if (!passwordMatch) {
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        // User authenticated successfully
        res.status(200).json({ message: "Login successful", user: user[0] });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { loginUser };
