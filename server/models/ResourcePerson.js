const db = require("../db");

class ResourcePerson {
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
    workExperience,
    referees,
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
    this.workExperience = workExperience;
    this.referees = referees;
  }

  static async getAllResourcePersons() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM resource_persons", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(
          results.map(
            (row) =>
              new ResourcePerson(
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
                row.workExperience,
                row.referees,
              ),
          ),
        );
      });
    });
  }

  static async createResourcePerson(resourcePerson) {
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
        workExperience,
        referees,
      } = resourcePerson;
      db.query(
        "INSERT INTO resource_persons (name, username, phoneNumber, emailAddress, highestQualifications, category, nic, age, password, workExperience, referees) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          workExperience,
          referees,
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

  static async updateResourcePerson(id, updatedData) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE resource_persons SET ? WHERE id = ?",
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

  static async deleteResourcePerson(id) {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM resource_persons WHERE id = ?",
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

module.exports = ResourcePerson;
