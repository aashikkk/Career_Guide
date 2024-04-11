const db = require("../db");

class Admin {
  constructor(id, name, username, emailAddress, nic, age, password) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.emailAddress = emailAddress;
    this.nic = nic;
    this.age = age;
    this.password = password;
  }

  static async createAdmin(admin) {
    return new Promise((resolve, reject) => {
      const { name, username, emailAddress, nic, age, password } = admin;
      db.query(
        "INSERT INTO admins (name, username, emailAddress, nic, age, password) VALUES (?, ?, ?, ?, ?, ?)",
        [name, username, emailAddress, nic, age, password],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results.insertId);
        },
      );
    });
  }

  static async updateAdmin(id, updatedData) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE admins SET ? WHERE id = ?",
        [updatedData, id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results.affectedRows > 0);
        },
      );
    });
  }

  static async deleteAdmin(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM admins WHERE id = ?", [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.affectedRows > 0);
      });
    });
  }

  static async getAdminById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM admins WHERE id = ?", [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        if (results.length === 0) {
          resolve(null);
        } else {
          const adminData = results[0];
          const admin = new Admin(
            adminData.id,
            adminData.name,
            adminData.username,
            adminData.emailAddress,
            adminData.nic,
            adminData.age,
            adminData.password,
          );
          resolve(admin);
        }
      });
    });
  }
}

module.exports = Admin;
