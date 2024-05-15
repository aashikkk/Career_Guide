-- Create the database
CREATE DATABASE IF NOT EXISTS career_guide;

-- Use the created database
USE career_guide;

-- Create the Appointment table
CREATE TABLE IF NOT EXISTS Appointment (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    time TIME,
    resourcePerson VARCHAR(50),
    attendeeUser VARCHAR(50)
);

-- Create the Blog table
CREATE TABLE IF NOT EXISTS Blog (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    description TEXT,
    -- coverPic MEDIUMBLOB DEFAULT NULL,
);

-- Create the Event table
CREATE TABLE IF NOT EXISTS Event (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,,
    title VARCHAR(255) NOT NULL,
    date DATE,
    time TIME,  
    resourcePerson VARCHAR(50),
    location VARCHAR(50)
    details TEXT
);



-- Create the Job table
CREATE TABLE IF NOT EXISTS Job (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    jobTitle VARCHAR(50) NOT NULL,
    type VARCHAR(60),
    company VARCHAR(50),
    location VARCHAR(50),
    description TEXT
);



-- For 3 Users
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    username VARCHAR(30) UNIQUE,
    phoneNumber VARCHAR(15),
    email VARCHAR(50) NOT NULL,
    highestQualifications VARCHAR(255),
    nic VARCHAR(13),
    age INT,
    password VARCHAR(64) NOT NULL,
    category ENUM('SchoolStudent', 'Undergraduate', 'Graduate', 'Admin', 'Counseller'),
    grade VARCHAR(10),
    currentYear INT,
    educationLevel VARCHAR(255),
    majorField VARCHAR(255),
    GraduateYear INT,
    specialization VARCHAR(100)
);


