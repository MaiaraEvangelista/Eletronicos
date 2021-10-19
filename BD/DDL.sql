CREATE DATABASE Eletronicos;


USE Eletronicos;
go


CREATE TABLE especialidade(
        idEspecialidade INT PRIMARY KEY IDENTITY,
        tituloEspecialidade VARCHAR(100) NOT NULL
);
go


CREATE TABLE usuario (
    idUsuarios INT PRIMARY KEY IDENTITY,
    email VARCHAR (250) UNIQUE NOT NULL,
    senha VARCHAR (15) NOT NULL,
    nomeCompleto VARCHAR (50),
    rua VARCHAR (100) NOT NULL,
	Nº  VARCHAR (100),
	CEP VARCHAR (22) NOT NULL,
    celular VARCHAR(18) UNIQUE NOT NULL,
    RG VARCHAR (50)
);
go


CREATE TABLE loja(
    idLoja INT PRIMARY KEY IDENTITY,
    idEspecialidade INT FOREIGN KEY REFERENCES especialidade(idEspecialidade),
    nomeComercio VARCHAR (300) NOT NULL,
    cidade VARCHAR(300) NOT NULL,
	rua VARCHAR(100) NOT NULL,
	Nº	VARCHAR(100) NOT NULL,
    CEP VARCHAR (22) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
);
go