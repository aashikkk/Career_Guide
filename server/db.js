const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

connection.connect((error) => {
	if (error) {
		console.error("Error connecting to MySQL: ", error);
		return;
	}
	console.log("Connected to MySQL database");
});

module.exports = connection;
