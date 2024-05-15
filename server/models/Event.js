const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Event extends Model {}

Event.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
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
			allowNull: true,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		details: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Event",
		tableName: "Event",
		timestamps: false,
	}
);

module.exports = Event;
