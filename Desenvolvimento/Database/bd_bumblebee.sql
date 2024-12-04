
CREATE DATABASE bumblebee;
USE bumblebee;

-- Criação das tabelas

CREATE TABLE Funcionario (
  id_funcionario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(32) NOT NULL,
  sobrenome VARCHAR(64) NOT NULL,
  data_nascimento DATE NOT NULL,
  sexo VARCHAR(10) NOT NULL,
  salario DOUBLE NOT NULL,
  telefone VARCHAR(16) NOT NULL,
  cargo VARCHAR(32) NOT NULL,
  PRIMARY KEY (id_funcionario)
);

CREATE TABLE Departamento (
  id_departamento INT NOT NULL AUTO_INCREMENT,
  nome_departamento VARCHAR(32) NOT NULL,
  venda BOOLEAN NOT NULL,
  id_funcionario INT,
  PRIMARY KEY (id_departamento)
);

CREATE TABLE Pedido (
  id_pedido INT NOT NULL AUTO_INCREMENT,
  tipo_pedido VARCHAR(32) NOT NULL,
  PRIMARY KEY (id_pedido)
);

CREATE TABLE Usuario (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  cpf CHAR(11) NOT NULL,
  nome VARCHAR(32) NOT NULL,
  sobrenome VARCHAR(64) NOT NULL,
  data_nascimento DATE NOT NULL,
  email VARCHAR(45) NOT NULL,
  senha VARCHAR(32) NOT NULL,
  telefone VARCHAR(12) NOT NULL,
  cnh INT NOT NULL,
  cep CHAR(8),
  id_pedido INT,
  id_funcionario INT,
  id_multa INT,
  id_veiculo INT,
  PRIMARY KEY (id_usuario)
);

CREATE TABLE Endereco (
  id_endereco INT NOT NULL AUTO_INCREMENT,
  cep CHAR(8) NOT NULL,
  pais VARCHAR(32) NOT NULL,
  estado VARCHAR(32) NOT NULL,
  cidade VARCHAR(32) NOT NULL,
  bairro VARCHAR(32) NOT NULL,
  tipo_logradouro VARCHAR(16) NOT NULL,
  logradouro VARCHAR(32) NOT NULL,
  numero_casa VARCHAR(8) NOT NULL,
  id_departamento INT,
  id_funcionario INT,
  id_multa INT,
  id_usuario INT,
  id_loja INT,
  PRIMARY KEY (id_endereco)
);

CREATE TABLE Veiculo (
  id_veiculo INT NOT NULL AUTO_INCREMENT,
  id_loja INT,
  renavam BIGINT,
  modelo VARCHAR(32) NOT NULL,
  placa VARCHAR(7) NOT NULL,
  chassi VARCHAR(17) NOT NULL,
  ano_modelo YEAR NOT NULL,
  ano_fabricacao YEAR NOT NULL,
  tipo VARCHAR(32) NOT NULL,
  marca VARCHAR(32) NOT NULL,
  tipo_combustivel VARCHAR(16) NOT NULL,
  categoria VARCHAR(32) NOT NULL,
  PRIMARY KEY (id_veiculo)
);

CREATE TABLE Multa (
  id_multa INT NOT NULL,
  data_horario DATETIME NOT NULL,
  valor DOUBLE NOT NULL,
  descricao TEXT(512) NOT NULL,
  id_usuario INT,
  id_veiculo INT,
  PRIMARY KEY (id_multa)
);

CREATE TABLE Loja (
  id_loja INT NOT NULL,
  quantidade_veiculos INT NOT NULL,
  cep CHAR(8),
  PRIMARY KEY (id_loja)
);

CREATE TABLE Venda (
  id_venda INT NOT NULL AUTO_INCREMENT,
  valor DOUBLE,
  id_usuario INT,
  id_veiculo INT,
  PRIMARY KEY (id_venda)
);

CREATE TABLE Locacao (
  id_locacao INT NOT NULL AUTO_INCREMENT,
  data_inicio DATETIME NOT NULL,
  data_fim DATETIME,
  id_usuario INT,
  id_veiculo INT,
  PRIMARY KEY (id_locacao)
);

CREATE TABLE Historico_Veiculo (
  id_historico INT NOT NULL AUTO_INCREMENT,
  id_veiculo INT NOT NULL,
  id_loja INT NOT NULL,
  PRIMARY KEY (id_historico)
);

CREATE TABLE Historico_Multas (
  id_historico INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  id_multa INT NOT NULL,
  id_veiculo INT NOT NULL,
  PRIMARY KEY (id_historico)
);

CREATE TABLE Detran (
  renavam BIGINT NOT NULL,
  `status` VARCHAR(32) NOT NULL,
  id_multa INT NOT NULL,
  id_veiculo INT NOT NULL,
  PRIMARY KEY (renavam)
);

-- Adição das chaves estrangeiras

ALTER TABLE Departamento ADD FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario);

ALTER TABLE Usuario ADD FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido);
ALTER TABLE Usuario ADD FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario);
ALTER TABLE Usuario ADD FOREIGN KEY (id_multa) REFERENCES Multa(id_multa);
ALTER TABLE Usuario ADD FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo);

ALTER TABLE Endereco ADD FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento);
ALTER TABLE Endereco ADD FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario);
ALTER TABLE Endereco ADD FOREIGN KEY (id_multa) REFERENCES Multa(id_multa);
ALTER TABLE Endereco ADD FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario);
ALTER TABLE Endereco ADD FOREIGN KEY (id_loja) REFERENCES Loja(id_loja);

ALTER TABLE Veiculo ADD FOREIGN KEY (id_loja) REFERENCES Loja(id_loja);

ALTER TABLE Multa ADD FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario);
ALTER TABLE Multa ADD FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo);

ALTER TABLE Venda ADD FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario);
ALTER TABLE Venda ADD FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo);

ALTER TABLE Locacao ADD FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario);
ALTER TABLE Locacao ADD FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo);

ALTER TABLE Historico_Veiculo ADD FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo);
ALTER TABLE Historico_Veiculo ADD FOREIGN KEY (id_loja) REFERENCES Loja(id_loja);

ALTER TABLE Historico_Multas ADD FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario);
ALTER TABLE Historico_Multas ADD FOREIGN KEY (id_multa) REFERENCES Multa(id_multa);
ALTER TABLE Historico_Multas ADD FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo);

ALTER TABLE Detran ADD FOREIGN KEY (id_multa) REFERENCES Multa(id_multa);
ALTER TABLE Detran ADD FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo);