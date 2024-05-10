// const db = require("../db");

// class Blog {
//   constructor(id, title, desc) {
//     this.id = id;
//     this.title = title;
//     this.desc = desc;
//   }

//   static getAllBlogs() {
//     return new Promise((resolve, reject) => {
//       db.query("SELECT * FROM blogs", (error, results) => {
//         if (error) {
//           return reject(error);
//         }
//         resolve(results);
//       });
//     });
//   }

//   static createBlog(blog) {
//     return new Promise((resolve, reject) => {
//       db.query("INSERT INTO blogs SET ?", blog, (error, results) => {
//         if (error) {
//           return reject(error);
//         }
//         resolve({ id: results.insertId, ...blog });
//       });
//     });
//   }

//   static updateBlog(id, blog) {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "UPDATE blogs SET ? WHERE id = ?",
//         [blog, id],
//         (error, results) => {
//           if (error) {
//             return reject(error);
//           }
//           resolve({ id: id, ...blog });
//         },
//       );
//     });
//   }

//   static deleteBlog(id) {
//     return new Promise((resolve, reject) => {
//       db.query("DELETE FROM blogs WHERE id = ?", id, (error, results) => {
//         if (error) {
//           return reject(error);
//         }
//         resolve(results.affectedRows);
//       });
//     });
//   }
// }

// module.exports = Blog;
