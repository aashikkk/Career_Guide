const db = require("../db");

class Undergraduate {
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
    currentYear,
    educationLevel,
    majorField,
    expectedGraduateYear,
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
    this.currentYear = currentYear;
    this.educationLevel = educationLevel;
    this.majorField = majorField;
    this.expectedGraduateYear = expectedGraduateYear;
  }

  static async getAllUndergraduates() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM undergraduates", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(
          results.map(
            (row) =>
              new Undergraduate(
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
                row.currentYear,
                row.educationLevel,
                row.majorField,
                row.expectedGraduateYear,
              ),
          ),
        );
      });
    });
  }

  static async createUndergraduate(undergraduate) {
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
        currentYear,
        educationLevel,
        majorField,
        expectedGraduateYear,
      } = undergraduate;
      db.query(
        "INSERT INTO undergraduates (name, username, phoneNumber, emailAddress, highestQualifications, category, nic, age, password, currentYear, educationLevel, majorField, expectedGraduateYear) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          currentYear,
          educationLevel,
          majorField,
          expectedGraduateYear,
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

  static async updateUndergraduate(id, updatedData) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE undergraduates SET ? WHERE id = ?",
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

  static async deleteUndergraduate(id) {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM undergraduates WHERE id = ?",
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

module.exports = Undergraduate;
