const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
	return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateAccessToken, verifyToken };
