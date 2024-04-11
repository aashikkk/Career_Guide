const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asd123",
  database: "career_guide",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL: ", error);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = connection;
