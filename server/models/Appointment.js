const db = require("../db");

class Appointment {
  constructor(id, dateTime, resourcePerson, attendeeUser) {
    this.id = id;
    this.dateTime = dateTime;
    this.resourcePerson = resourcePerson;
    this.attendeeUser = attendeeUser;
  }

  static getAllAppointments() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM appointments", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  static createAppointment(appointment) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO appointments SET ?",
        appointment,
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve({ id: results.insertId, ...appointment });
        },
      );
    });
  }

  static updateAppointment(id, updatedAppointment) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE appointments SET ? WHERE id = ?",
        [updatedAppointment, id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve({ id: id, ...updatedAppointment });
        },
      );
    });
  }

  static async deleteAppointment(id) {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM appointments WHERE id = ?",
        id,
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results.affectedRows);
        },
      );
    });
  }
}

module.exports = Appointment;
