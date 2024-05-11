-- Create the database
CREATE DATABASE IF NOT EXISTS career_guide;

-- Use the created database
USE career_guide;

-- Create the Admin table
-- CREATE TABLE IF NOT EXISTS Admin (
--     id VARCHAR(50) PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     username VARCHAR(20) UNIQUE,
--     email VARCHAR(50) NOT NULL,
--     password VARCHAR(64) NOT NULL
-- );

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
    coverPic MEDIUMBLOB DEFAULT NULL,
    description TEXT
);

-- Create the Event table
CREATE TABLE IF NOT EXISTS Event (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,,
    title VARCHAR(255) NOT NULL,
    date DATE,
    time TIME,
    resourcePerson VARCHAR(50),
    location VARCHAR(50)
);



-- Create the Job table
CREATE TABLE IF NOT EXISTS Job (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    jobTitle VARCHAR(50) NOT NULL,
    type VARCHAR(60),
    company VARCHAR(50),
    location VARCHAR(50)
);

-- Create the ResourcePerson table
-- CREATE TABLE IF NOT EXISTS ResourcePerson (
--     id VARCHAR(50) PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     username VARCHAR(20) UNIQUE,
--     phoneNumber VARCHAR(15),
--     email VARCHAR(50) NOT NULL,
--     highestQualifications VARCHAR(255),
--     nic VARCHAR(13) NOT NULL,
--     age INT,
--     password VARCHAR(64) NOT NULL,
--     workExperience TEXT,
--     referees TEXT
-- );

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


-- -- Create the SchoolStudent table
-- CREATE TABLE IF NOT EXISTS SchoolStudent (
--     id VARCHAR(50) PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     username VARCHAR(30) UNIQUE,
--     phoneNumber VARCHAR(15),
--     email VARCHAR(30) NOT NULL,
--     highestQualifications VARCHAR(255),
--     nic VARCHAR(13),
--     age INT,
--     password VARCHAR(64) NOT NULL,
--     grade VARCHAR(10)
-- );

-- -- Create the Undergraduate table
-- CREATE TABLE IF NOT EXISTS Undergraduate (
--     id VARCHAR(50) PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     username VARCHAR(20) UNIQUE,
--     phoneNumber VARCHAR(15),
--     email VARCHAR(50) NOT NULL,
--     highestQualifications VARCHAR(255),
--     nic VARCHAR(13) NOT NULL,
--     age INT,
--     password VARCHAR(64) NOT NULL,
--     currentYear INT,
--     educationLevel VARCHAR(100),
--     majorField VARCHAR(100),
--     expectedGraduateYear INT
-- );

-- -- Create the Graduate table
-- CREATE TABLE IF NOT EXISTS Graduate (
--     id VARCHAR(50) PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     username VARCHAR(20) UNIQUE,
--     phoneNumber VARCHAR(15),
--     email VARCHAR(50) NOT NULL,
--     highestQualifications VARCHAR(255),
--     nic VARCHAR(13) NOT NULL,
--     age INT,
--     password VARCHAR(64) NOT NULL,
--     currentYear INT,
--     educationLevel VARCHAR(255),
--     majorField VARCHAR(255),
--     expectedGraduateYear INT
-- );