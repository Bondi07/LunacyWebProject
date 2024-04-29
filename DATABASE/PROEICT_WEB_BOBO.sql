-- BAZA DE DATE PENTRU PROIECT BOBO WEB_E-LEARNING SITE 
-- SIGN UP SI SIGN IN TABLES


CREATE TABLE SIGNUP (
    ID INT PRIMARY KEY NOT NULL IDENTITY(1,1),
    Fname VARCHAR(255) NOT NULL,
    Lname VARCHAR(255) NOT NULL,
	Username VARCHAR(100) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

-- PENTRU A VEDE TABELUL 
SELECT * FROM SIGNUP;

-- PENTRU A STERGE TABEL 
--drop table SIGNUP;



CREATE TABLE LOGIN (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

-- PENTRU A VEDE TABELUL 
SELECT * FROM LOGIN;