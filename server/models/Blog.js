const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Blog extends Model {}

Blog.init(
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
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		// coverPic: {
		// 	type: DataTypes.BLOB("medium"),
		// 	allowNull: true,
		// },
	},
	{
		sequelize,
		modelName: "Blog",
		tableName: "Blog",
		timestamps: false,
	}
);

module.exports = Blog;
