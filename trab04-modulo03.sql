-- 1. Seleção de todos os dados de transações:
SELECT * FROM Transacoes;

-- 2. Renomeando colunas:
SELECT ID_Transacao AS ID_Transacao, Data AS Data, Valor AS Valor
FROM Transacoes;

-- 3. Filtragem com a cláusula WHERE:
SELECT * FROM Transacoes
WHERE Valor > 100.00;
-- 4. Ordenação com a cláusula ORDER BY:
SELECT * FROM Transacoes
ORDER BY Valor DESC;

-- 5. Agregação com funções SQL:
SELECT AVG(Valor) AS Media, MAX(Valor) AS Valor_Maximo, MIN(Valor) AS Valor_Minimo, COUNT(*) AS Total_Transacoes
FROM Transacoes;

-- 6. Agrupamento com a cláusula GROUP BY:
SELECT Produto, AVG(Valor) AS Media_Valor_por_Produto
FROM Transacoes
GROUP BY Produto;

-- 7. Consulta combinada:
SELECT Categoria, COUNT(*) AS Total_Produtos, SUM(Valor) AS Valor_Total, AVG(Valor) AS Media_Valor_por_Transacao
FROM Transacoes
GROUP BY Categoria;
