const db = require("../db");

class Event {
  constructor(id, title, date, time, resourcePerson, location) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.time = time;
    this.resourcePerson = resourcePerson;
    this.location = location;
  }

  static getAllEvents() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM events", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  static createEvent(event) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO events SET ?", event, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve({ id: results.insertId, ...event });
      });
    });
  }

  static updateEvent(id, event) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE events SET ? WHERE id = ?",
        [event, id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve({ id: id, ...event });
        },
      );
    });
  }

  static deleteEvent(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM events WHERE id = ?", id, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.affectedRows);
      });
    });
  }
}

module.exports = Event;
