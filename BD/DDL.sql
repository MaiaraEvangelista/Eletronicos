CREATE DATABASE Eletronicos;


USE Eletronicos;
go


CREATE TABLE TiposUsuario(
	idTiposUsuario INT PRIMARY KEY IDENTITY,
	tituloTiposUsuario VARCHAR(40) NOT NULL,
);
go

CREATE TABLE Especialidade(
        idEspecialidade INT PRIMARY KEY IDENTITY,
        tituloEspecialidade VARCHAR(100) NOT NULL
);
go


CREATE TABLE Usuario (
    idUsuarios INT PRIMARY KEY IDENTITY,
	idTiposUsuario INT FOREIGN KEY REFERENCES TiposUsuario(idTiposUsuario),
    email VARCHAR (250) UNIQUE NOT NULL,
    senha VARCHAR (255) NOT NULL,
	CPF VARCHAR (14) NOT NULL UNIQUE,
    nomeCompleto VARCHAR (50),
    rua VARCHAR (100) NOT NULL,
	N	VARCHAR(100) NOT NULL,
	UF  VARCHAR (100) NOT NULL,
	complemento VARCHAR (100),  
	CEP VARCHAR (22) NOT NULL,
    celular VARCHAR(18) UNIQUE NOT NULL,
);
go

CREATE TABLE Formulario(
	idFormulario INT PRIMARY KEY IDENTITY,
	[status]	VARCHAR(20) NOT NULL,
);
go

CREATE TABLE Loja(
    idLoja INT PRIMARY KEY IDENTITY,
	idUsuario INT FOREIGN KEY REFERENCES Usuario(idUsuarios),
    idEspecialidade INT FOREIGN KEY REFERENCES Especialidade(idEspecialidade),
	idFormulario INT FOREIGN KEY REFERENCES Formulario(idFormulario),
	imagem NVARCHAR(200) NOT NULL,
    nomeComercio VARCHAR (300) NOT NULL,
	CNPJ VARCHAR(18),
    cidade VARCHAR(300) NOT NULL,
	rua VARCHAR(100) NOT NULL,
	N	VARCHAR(100) NOT NULL,
	UF	VARCHAR(100) NOT NULL,
	complemento VARCHAR (100),
    CEP VARCHAR (22) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);
go