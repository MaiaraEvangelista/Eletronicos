--DML

USE Eletronicos;
go

INSERT INTO TiposUsuario (tituloTiposUsuario)
VALUES		('Comerciante'),
			('UsuarioComum');
go

INSERT INTO especialidade(tituloEspecialidade)
VALUES            ('Troca')
               ,('Montagem/Desmontagem')
               ,('Descarte')
               ,('Venda');
go

INSERT INTO usuario( idTiposUsuario,email, senha, nomeCompleto, rua, Nº, complemento, CEP, celular)
VALUES             (1,'maiara@email.com', '111111', 'Maiara Evangelista de Souza', 'R.Colina', '235', 'apt 45', '01203-001', '11954404982'),
                   (1,'joao@email.com', '222222', 'João Pedro Nascimento', 'R.Conselheiro Nebias', '301', '02', '01303-001', '11978920157'),
                   (2,'giovanniN@email.com', '333333', 'Giovanni Nespoli', 'R.Virginia Soares', '1000', '22', '01403-001', '11930024872'),
                   (2,'higor@email.com', '444444', 'Higor Henrique', 'R.Malagueta Pimpa', '200', '13', '01503-001', '11942203147');
go

INSERT INTO loja(idEspecialidade, nomeComercio, cidade, rua, Nº, CEP, telefone)
VALUES            (4, 'JohnnyStore', 'São Paulo', 'R. Barão de Limeira', '539', '06343340', '11940023451');
go