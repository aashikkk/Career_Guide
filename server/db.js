const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: "mysql",
    }
);

sequelize
    .authenticate()
    .then(() => console.log("Connected to MySQL database using Sequelize"))
    .catch((error) =>
        console.error("Error connecting to MySQL using Sequelize:", error)
    );

module.exports = sequelize;
