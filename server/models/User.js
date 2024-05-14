const { DataTypes, Model } = require("sequelize");
const db = require("../db");

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
	},
	{
		tableName: "Users",
		modelName: "User",
		timestamps: false,
	}
);

// const user = {
//     getAllUsers: async () => {
//         try {
//             return await User.findAll();
//         } catch (error) {
//             throw error;
//         }
//     },

//     getUserByUsername: async (username) => {
//         try {
//             return await User.findOne({ where: { username } });
//         } catch (error) {
//             throw error;
//         }
//     },

//     getUserByCategory: async (category) => {
//         try {
//             return await User.findAll({ where: { category } });
//         } catch (error) {
//             throw error;
//         }
//     },

//     getUserByIdOfCounseller: async (id) => {
//         try {
//             return await User.findOne({
//                 where: { id, category: "Counseller" },
//             });
//         } catch (error) {
//             throw error;
//         }
//     },

//     updateUserByIdOfCounseller: async (id, updatedFields) => {
//         try {
//             await User.update(updatedFields, {
//                 where: { id, category: "Counseller" },
//             });
//         } catch (error) {
//             throw error;
//         }
//     },

//     deleteUserByIdOfCounseller: async (id) => {
//         try {
//             await User.destroy({ where: { id, category: "Counseller" } });
//         } catch (error) {
//             throw error;
//         }
//     },

//     updateUser: async (username, updatedFields) => {
//         try {
//             await User.update(updatedFields, { where: { username } });
//         } catch (error) {
//             throw error;
//         }
//     },

//     deleteUser: async (username) => {
//         try {
//             await User.destroy({ where: { username } });
//         } catch (error) {
//             throw error;
//         }
//     },
// };

module.exports = User;
