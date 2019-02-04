DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos;
USE todos;
CREATE TABLE todos (
     id int not null primary key auto_increment,
     user VARCHAR(25) NOT NULL,
     title VARCHAR(25) NOT NULL

);

