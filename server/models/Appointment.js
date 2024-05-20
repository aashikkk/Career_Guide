const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection/db");

class Appointment extends Model {}

Appointment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		time: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		resourcePerson: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		attendeeUser: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Appointment",
		tableName: "Appointment",
		timestamps: false,
	}
);

module.exports = Appointment;
