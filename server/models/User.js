const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		category: {
			type: DataTypes.ENUM,
			values: [
				"SchoolStudent",
				"Undergraduate",
				"Graduate",
				"Admin",
				"Counseller",
			],
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		highestQualifications: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		nic: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		grade: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		currentYear: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		educationLevel: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		majorField: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		GraduateYear: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		specialization: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		tableName: "Users",
		modelName: "User",
		timestamps: false,
	}
);

module.exports = User;
