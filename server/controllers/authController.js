const User = require("../models/User");
const { Op } = require("sequelize");
const { USER_CATEGORIES, ROLES } = require("../models/enums");
const { validateEmail, validatePassword } = require("../utils/validator");
const { generateAccessToken } = require("../utils/tokens");

const registerUser = async (req, res) => {
  const { name, username, phoneNumber, email, nic, password } = req.body;

  if (!name || !username || !email || !nic || !password || !req.body.category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const category = req.body.category.toUpperCase();

  if (
    !USER_CATEGORIES.includes(category) ||
    category === ROLES.ADMIN ||
    category === ROLES.COUNSELLOR
  ) {
    return res.status(403).json({ message: "Invalid category" });
  }

  const { error: emailError } = validateEmail(email);
  if (emailError) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const { error: passwordError } = validatePassword(password);
  if (passwordError) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  try {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }, { nic }],
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await User.create({
      name,
      username,
      phoneNumber,
      email,
      nic,
      password,
      category,
    });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = user.checkPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateAccessToken({ userId: user.id });
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  });
};

const registerAdmin = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const { error: emailError } = validateEmail(email);
  if (emailError) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const { error: passwordError } = validatePassword(password);
  if (passwordError) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  try {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await User.create({
      name,
      username,
      email,
      password,
      category: ROLES.ADMIN,
    });

    return res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error registering admin:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const registerCounsellor = async (req, res) => {
  const { name, username, phoneNumber, email, nic, password, specialization } =
    req.body;

  if (
    !name ||
    !username ||
    !phoneNumber ||
    !email ||
    !nic ||
    !password ||
    !req.body.category ||
    !specialization
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const category = req.body.category.toUpperCase();

  if (!category !== ROLES.COUNSELLOR) {
    return res.status(403).json({ message: "Invalid category" });
  }

  const { error: emailError } = validateEmail(email);
  if (emailError) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const { error: passwordError } = validatePassword(password);
  if (passwordError) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  try {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }, { nic }],
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await User.create({
      name,
      username,
      phoneNumber,
      email,
      nic,
      password,
      category,
      specialization,
    });

    return res
      .status(201)
      .json({ message: "Counsellor registered successfully" });
  } catch (error) {
    console.error("Error registering counsellor:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  registerAdmin,
  registerCounsellor,
  logout,
};
