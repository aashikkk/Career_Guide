const router = require("express").Router();

// Import route files
const authRoutes = require("./authRoutes");
// const userRoutes = require("./userRoute");
// const eventRoutes = require("./eventRoute");
// const appointmentRoutes = require("./appointmentRoute");
// const blogRoutes = require("./blogRoute");
// const jobRoutes = require("./jobRoute");
// const stripRoutes = require("./stripeRoute");

// // Routes
router.use("/", authRoutes);
// router.use("/user", userRoutes);
// router.use("/event", eventRoutes);
// router.use("/appointment", appointmentRoutes);
// router.use("/blog", blogRoutes);
// router.use("/job", jobRoutes);
// router.use("/pay", stripRoutes);
router.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
