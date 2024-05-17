const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ override: true });
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import route files
const userRoutes = require("./routes/userRoute");
const eventRoutes = require("./routes/eventRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const blogRoutes = require("./routes/blogRoutes");
const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");
const stripRoutes = require("./routes/stripeRoute");

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:5173",
		methods: "GET,POST",
		credentials: true,
	})
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/", authRoutes);
app.use("/user", userRoutes);
app.use("/event", eventRoutes);
app.use("/appointment", appointmentRoutes);
app.use("/blog", blogRoutes);
app.use("/job", jobRoutes);
app.use("/pay", stripRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
