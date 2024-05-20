const router = require("express").Router();

// Import route files

const userRoutes = require("./userRoute");
const eventRoutes = require("./eventRoutes");
const appointmentRoutes = require("./appointmentRoutes");
const blogRoutes = require("./blogRoutes");
const jobRoutes = require("./jobRoutes");
const authRoutes = require("./authRoutes");
const stripRoutes = require("./stripeRoute");

// Routes
router.use("/", authRoutes);
router.use("/user", userRoutes);
router.use("/event", eventRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/blog", blogRoutes);
router.use("/job", jobRoutes);
router.use("/pay", stripRoutes);

router.use("*", (req, res) => {
	res.status(404).json({ message: "Route not found" });
});

module.exports = router;
