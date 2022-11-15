CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;


CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY (id)

);

DESCRIBE empleados;

INSERT INTO empleados VALUES
(1,'Angel', 2000),
(2, 'José',  1500),
(3, 'Carlos', 3000),
(4, 'Miguel', 2500);
