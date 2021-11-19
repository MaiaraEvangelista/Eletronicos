--DML

USE Eletronicos;
go

INSERT INTO TiposUsuario (tituloTiposUsuario)
VALUES		('ADM'),
			('Comerciante'),
			('UsuarioComum');
go

INSERT INTO Especialidade(tituloEspecialidade)
VALUES            ('Troca')
               ,('Montagem/Desmontagem')
               ,('Descarte')
               ,('Venda');
go

INSERT INTO Usuario( idTiposUsuario,email, senha, CPF, CNPJ, nomeCompleto, rua, UF, complemento, CEP, celular)
VALUES             (1,'maiara@email.com', '111111', '111.111.111-11', '', 'Maiara Evangelista de Souza', 'R.Colina', 'SP', 'apt 45', '01203-001', '11954404982'),
                   (2,'joao@email.com', '222222', '222.222.222-22', '11.222.333/0001-15', 'João Pedro Nascimento', 'R.Conselheiro Nebias', 'SP', '02', '01303-001', '11978920157'),
                   (3,'giovanniN@email.com', '333333', '333.333.333-33','' , 'Giovanni Nespoli', 'R.Virginia Soares', '1000', 'MG', '01403-001', '11930024872'),
                   (3,'higor@email.com', '444444', '444.444.444-44', '', 'Higor Henrique', 'R.Malagueta Pimpa', '200', 'RJ', '01503-001', '11942203147');
go

INSERT INTO Comentario(idUsuarios, comentario)
VALUES				(3, 'loja ruim'),
					(4, 'O vendedor é legal');
go

INSERT INTO Formulario([status])
VALUES		('Aceito'),
			('Recusado');
go

INSERT INTO Loja(idEspecialidade, idFormulario, idComentario, imagem, nomeComercio, cidade, rua, UF, CEP, telefone)
VALUES            (4, 1, 1, 'Loja.PNG', 'JohnnyStore', 'São Paulo', 'R. Barão de Limeira', 'SP', '06343340', '11940023451');
go