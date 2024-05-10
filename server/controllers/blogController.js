// const Blog = require("../models/Blog");

// const blogController = {
//   createBlog: async (req, res) => {
//     try {
//       const { title, desc } = req.body;
//       const blog = new Blog(null, title, desc);
//       const blogId = await Blog.createBlog(blog);
//       res.status(201).json({ blogId });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },

//   updateBlog: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const blogData = req.body;
//       const updated = await Blog.updateBlog(id, blogData);
//       if (updated) {
//         res.status(200).json({ message: "Blog updated successfully" });
//       } else {
//         res.status(404).json({ error: "Blog not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },

//   deleteBlog: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const deleted = await Blog.deleteBlog(id);
//       if (deleted) {
//         res.status(200).json({ message: "Blog deleted successfully" });
//       } else {
//         res.status(404).json({ error: "Blog not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },

//   getBlogById: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const blog = await Blog.getBlogById(id);
//       if (blog) {
//         res.status(200).json(blog);
//       } else {
//         res.status(404).json({ error: "Blog not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },

//   getAllBlogs: async (req, res) => {
//     try {
//       const blogs = await Blog.getAllBlogs();
//       res.status(200).json(blogs);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },
// };

// module.exports = blogController;
