CREATE TABLE departamento(
    codigo INTEGER(10) PRIMARY KEY,
    nombre VARCHAR(100),
    presupuesto DOUBLE
); 

CREATE TABLE empleado(
    codigo INTEGER(10) PRIMARY KEY,
    nif VARCHAR(9),
    nombre VARCHAR(100),
    apellido1 VARCHAR(100),
    apellido2 VARCHAR(100),
    codigo_departamento INTEGER(10),
    FOREIGN KEY(codigo_departamento) REFERENCES departamento(codigo) ON DELETE CASCADE ON UPDATE CASCADE
); 

INSERT INTO departamento
VALUES(1234, "departamento 1", 1000.10);

INSERT INTO departamento
VALUES(2345, "departamento 2", 2000.20);

INSERT INTO empleado
VALUES(
    1111,
    "nif 1",
    "nombre 1",
    "1apellido 1",
    "2apellido 1",
    1234
);

INSERT INTO empleado
VALUES(
    2222,
    "nif 2",
    "nombre 2",
    "1apellido 2",
    "2apellido 2",
    2345
);

INSERT INTO empleado
VALUES(
    3333,
    "nif 3",
    "nombre 3",
    "1apellido 3",
    "2apellido 3",
    1234
);

SELECT
    *
FROM
    departamento

SELECT
    *
FROM
    empleado;