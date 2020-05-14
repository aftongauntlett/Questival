-- Set up Questival database

-- Users Table
-- ID
-- Name


-- Events Table
-- ID
-- Name


-- Interests Table
-- ID
-- Name


-- Users Events Join Table
-- User ID
-- Event ID


-- User Interests Join Table
-- User ID
-- Interests ID

-- EXAMPLE FROM ACTIVITES:

-- Drops the database if it already exists --
DROP DATABASE IF EXISTS wishes_db;

-- Create the database and specified it for use.
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table.
CREATE TABLE wishes (
  id int NOT NULL AUTO_INCREMENT,
  wish varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
