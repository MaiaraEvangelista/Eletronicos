--DML

USE Eletronicos;
go



INSERT INTO especialidade(tituloEspecialidade)
VALUES            ('Troca')
               ,('Montagem/Desmontagem')
               ,('Descarte')
               ,('Venda');
go

INSERT INTO usuario( email, senha, nomeCompleto, rua, Nº, CEP, celular, RG )
VALUES              ('maiara@email.com', '111111', 'Maiara Evangelista de Souza', 'R.Colina', '235', '01203-001', '11954404982', '251473598')
                   ,('joao@email.com', '222222', 'João Pedro Nascimento', 'R.Conselheiro Nebias', '301', '01303-001', '11978920157', '000000000')
                   ,('giovanniN@email.com', '333333', 'Giovanni Nespoli', 'R.Virginia Soares', '1000', '01403-001', '11930024872', '111111111')
                   ,('higor@email.com', '444444', 'Higor Henrique', 'R.Malagueta Pimpa', '200', '01503-001', '11942203147', '222222222');
go

INSERT INTO loja(idEspecialidade, nomeComercio, cidade, rua, Nº, CEP, telefone)
VALUES            (4, 'JohnnyStore', 'São Paulo', 'R. Barão de Limeira', '539', '06343340', '11940023451');
go