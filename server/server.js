const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Import route files
const adminRoutes = require("./routes/adminRoutes");
const schoolStudentRoutes = require("./routes/schoolStudentRoutes");
const undergraduateRoutes = require("./routes/undergraduateRoutes");
const graduateRoutes = require("./routes/graduateRoutes");
const resourcePersonRoutes = require("./routes/resourcePersonRoutes");
const eventRoutes = require("./routes/eventRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const blogRoutes = require("./routes/blogRoutes");
const jobRoutes = require("./routes/jobRoutes");
const registerRoutes = require("./routes/registerRoute");
const loginRoutes = require("./routes/loginRoute");

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/admin", adminRoutes);
app.use("/school-student", schoolStudentRoutes);
app.use("/undergraduate", undergraduateRoutes);
app.use("/graduate", graduateRoutes);
app.use("/resource-person", resourcePersonRoutes);
app.use("/event", eventRoutes);
app.use("/appointment", appointmentRoutes);
app.use("/blog", blogRoutes);
app.use("/job", jobRoutes);

// app.use((req, res, next) => {
//   console.log("Incoming Request:");
//   console.log("Method:", req.method);
//   console.log("URL:", req.url);
//   console.log("Headers:", req.headers);

//   if (req.cookies) {
//     console.log("Cookies:", req.cookies);
//   }

//   next();
// });

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
