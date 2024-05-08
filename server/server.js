const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ override: true });
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Import route files
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoute");
const resourcePersonRoutes = require("./routes/resourcePersonRoutes");
const eventRoutes = require("./routes/eventRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const blogRoutes = require("./routes/blogRoutes");
const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/resource-person", resourcePersonRoutes);
app.use("/event", eventRoutes);
app.use("/appointment", appointmentRoutes);
app.use("/blog", blogRoutes);
app.use("/job", jobRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
