const Blog = require("../models/Blog");

const blogController = {
	createBlog: async (req, res) => {
		const { title, description, coverPic } = req.body;

		try {
			await Blog.createBlog(title, description, coverPic);
			res.status(201).json({ message: "Blog created successfully" });
		} catch (error) {
			console.log("Error creating blog", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	updateBlog: async (req, res) => {
		const { id } = req.params;
		const blogData = req.body;

		try {
			await Blog.updateBlogById(id, blogData);
			res.status(200).json({ message: "Blog updated successfully" });
		} catch (error) {
			res.status(404).json({ error: "Blog not found" });
			res.status(500).json({ error: error.message });
		}
	},

	deleteBlog: async (req, res) => {
		const { id } = req.params;

		try {
			await Blog.deleteBlogById(id);
			res.status(200).json({ message: "Blog deleted successfully" });
		} catch (error) {
			res.status(404).json({ error: "Blog not found" });
			res.status(500).json({ error: error.message });
		}
	},

	getBlogById: async (req, res) => {
		const { id } = req.params;

		try {
			const blog = await Blog.getBlogById(id);
			res.status(200).json(blog);
		} catch (error) {
			res.status(404).json({ error: "Blog not found" });
			res.status(500).json({ error: error.message });
		}
	},

	getAllBlogs: async (req, res) => {
		try {
			const blogs = await Blog.getAllBlogs();
			res.status(200).json(blogs);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = blogController;
