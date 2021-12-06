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

INSERT INTO Usuario( idTiposUsuario,email, senha, CPF, nomeCompleto, rua, N, UF, complemento, CEP, celular)
VALUES             (1,'maiara@email.com', '111111', '111.111.111-11', 'Maiara Evangelista de Souza', 'R.Colina', '235', 'SP', 'apt 45', '01203-001', '11954404982'),
                   (2,'joao@email.com', '222222', '222.222.222-22', 'João Pedro Nascimento', 'R.Conselheiro Nebias','763', 'SP', 'apt 02', '01303-001', '11978920157'),
                   (3,'giovanniN@email.com', '333333', '333.333.333-33', 'Giovanni Nespoli', 'R.Mercedes Lopes', '1000', 'MG','apt 06', '03614-0001', '11930024872'),
                   (3,'higor@email.com', '444444', '444.444.444-44', 'Higor Henrique', 'R.monsenhor Manoel Gomes', '200', 'RJ', 'apt 200', '02975-120', '11942203147');
go

INSERT INTO Formulario([status])
VALUES		('Aceito'),
			('Recusado');
go

INSERT INTO Loja(IdUsuario, idEspecialidade, idFormulario, CNPJ, nomeComercio, cidade, rua, N, UF, CEP, telefone)
VALUES            (2, 4, 1, '11.222.333/0001-15' ,'JohnnyStore', 'São Paulo', 'R. Gen Osório','172', 'SP', '01213-000', '11940023451');
go