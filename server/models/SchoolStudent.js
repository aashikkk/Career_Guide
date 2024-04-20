const db = require("../db");

class SchoolStudent {
  constructor(
    id,
    name,
    username,
    phoneNumber,
    emailAddress,
    highestQualifications,
    category,
    nic,
    age,
    password,
    grade,
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.highestQualifications = highestQualifications;
    this.category = category;
    this.nic = nic;
    this.age = age;
    this.password = password;
    this.grade = grade;
  }

  static async getAllSchoolStudents() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM school_students", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(
          results.map(
            (row) =>
              new SchoolStudent(
                row.id,
                row.name,
                row.username,
                row.phoneNumber,
                row.emailAddress,
                row.highestQualifications,
                row.category,
                row.nic,
                row.age,
                row.password,
                row.grade,
              ),
          ),
        );
      });
    });
  }

  static async createSchoolStudent(schoolStudent) {
    return new Promise((resolve, reject) => {
      const {
        name,
        username,
        phoneNumber,
        emailAddress,
        highestQualifications,
        category,
        nic,
        age,
        password,
        grade,
      } = schoolStudent;
      db.query(
        "INSERT INTO school_students (name, username, phoneNumber, emailAddress, highestQualifications, category, nic, age, password, grade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          name,
          username,
          phoneNumber,
          emailAddress,
          highestQualifications,
          category,
          nic,
          age,
          password,
          grade,
        ],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results.insertId);
        },
      );
    });
  }

  static async updateSchoolStudent(id, updatedData) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE school_students SET ? WHERE id = ?",
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

  static async deleteSchoolStudent(id) {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM school_students WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results.affectedRows > 0);
        },
      );
    });
  }
}

module.exports = SchoolStudent;
