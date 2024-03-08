CREATE DATABASE equipe7;
USE equipe7;

CREATE TABLE contatos(
	id int primary key auto_increment,
    nome varchar(50),
    sobrenome varchar(50),
    telefone varchar(11),
    email varchar(50)
);
