const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Job extends Model {}

Job.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		jobTitle: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		company: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
		},
	},
	{ sequelize, modelName: "Job", tableName: "Job", timestamps: false }
);

module.exports = Job;
