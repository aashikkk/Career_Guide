const db = require("../db");

const blog = {
	getAllBlogs: async () => {
		try {
			const [blogs] = await db.promise().query("SELECT * FROM Blog");
			return blogs;
		} catch (error) {
			throw error;
		}
	},

	createBlog: async (title, description, coverPic) => {
		try {
			// Insert blog into database
			const sql =
				"INSERT INTO Blog (title, description, coverPic) VALUES (?, ?, ?)";
			await db.promise().query(sql, [title, description, coverPic]);
			return { message: "Blog created successfully" };
		} catch (error) {
			throw error;
		}
	},

	getBlogById: async (blogId) => {
		try {
			const [blog] = await db
				.promise()
				.query("SELECT * FROM Blog WHERE id = ?", [blogId]);
			return blog[0]; // Assuming blog ID is unique
		} catch (error) {
			throw error;
		}
	},

	updateBlogById: async (blogId, updatedFields) => {
		try {
			const updateQuery =
				"UPDATE Blog SET " +
				Object.keys(updatedFields)
					.map((key) => `${key} = ?`)
					.join(", ") +
				" WHERE id = ?";
			const updateValues = [...Object.values(updatedFields), blogId];
			await db.promise().query(updateQuery, updateValues);
		} catch (error) {
			throw error;
		}
	},

	deleteBlogById: async (blogId) => {
		try {
			await db.promise().query("DELETE FROM Blog WHERE id = ?", [blogId]);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = blog;
