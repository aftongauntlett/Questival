
DROP DATABASE IF EXISTS questival_db;

-- Create the database for QUESTival
CREATE DATABASE questival_db;
USE questival_db;

-- Create user table.
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  attendee_name varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

-- Create event table.
CREATE TABLE event (
  id int NOT NULL AUTO_INCREMENT,
  event_name varchar(255) NOT NULL,
  event_desc varchar(255) NOT NULL,
  event_location varchar (255) NOT NULL, 
  event_date varchar  (20) NOT NULL,
  PRIMARY KEY (id)
);

