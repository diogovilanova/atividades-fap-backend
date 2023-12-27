-- 1. Inserção de produtos (INSERT):
INSERT INTO Produtos (NomeProduto, Preco, QuantidadeEmEstoque)
VALUES
   ('Smartphone', 799.99, 20),
   ('Tablet', 349.99, 10),
   ('Fone de Ouvido', 49.99, 50);

-- 2. Atualização de estoque (UPDATE):
UPDATE Produtos
SET QuantidadeEmEstoque = 25, Preco = 849.99
WHERE NomeProduto = 'Smartphone';

-- 3. Venda de produtos (UPDATE):
-- Venda de cinco unidades do Tablet
UPDATE Produtos
SET QuantidadeEmEstoque = QuantidadeEmEstoque - 5
WHERE NomeProduto = 'Tablet';
-- Venda de dez unidades do Fone de Ouvido
UPDATE Produtos
SET QuantidadeEmEstoque = QuantidadeEmEstoque - 10
WHERE NomeProduto = 'Fone de Ouvido';
