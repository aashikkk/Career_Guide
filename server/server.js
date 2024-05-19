const express = require("express");
require("dotenv").config({ override: true });
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const session = require("express-session");
const routes = require("./routes");
const sequelize = require("./connection/db");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 * 10 }, // 10 mins
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
