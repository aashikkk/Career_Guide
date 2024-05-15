const Blog = require("../models/Blog");

const blogController = {
	createBlog: async (req, res) => {
		const { title, description } = req.body;

		try {
			const newBlog = await Blog.create({ title, description });
			res.status(201).json({
				message: "Blog created successfully",
				blog: newBlog,
			});
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	updateBlog: async (req, res) => {
		const { id } = req.params;
		const blogData = req.body;

		try {
			const blog = await Blog.findByPk(id);
			if (!blog) {
				return res.status(404).json({ error: "Blog not found" });
			}
			const updatedBlog = await blog.update(blogData);
			res.status(200).json({
				message: "Blog updated successfully",
				blog: updatedBlog,
			});
		} catch (error) {
			console.error("Error updating blog:", error);
			res.status(500).json({ error: error.message });
		}
	},

	deleteBlog: async (req, res) => {
		const { id } = req.params;

		try {
			const result = await Blog.destroy({
				where: { id },
			});
			if (result === 0) {
				return res.status(404).json({ error: "Blog not found" });
			}
			res.status(200).json({ message: "Blog deleted successfully" });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getBlogById: async (req, res) => {
		const { id } = req.params;

		try {
			const blog = await Blog.findByPk(id);
			if (!blog) {
				return res.status(404).json({ error: "Blog not found" });
			}
			res.status(200).json(blog);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getAllBlogs: async (req, res) => {
		try {
			const blogs = await Blog.findAll();
			res.status(200).json(blogs);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = blogController;
