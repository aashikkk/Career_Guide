const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
        },
        time: {
            type: DataTypes.TIME,
        },
        resourcePerson: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "Event",
        tableName: "Event",
        timestamps: false,
    }
);

module.exports = Event;
