-- 1. Inserção de dados:
-- Inserção de autores
INSERT INTO Autores (Nome, Nacionalidade) VALUES
   ('Autor1', 'Nacionalidade1'),
   ('Autor2', 'Nacionalidade2'),
   ('Autor3', 'Nacionalidade3');

-- Inserção de livros associados aos autores
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES
   ('Livro1', 1994, 1),
   ('Livro2', 1995, 1),
   ('Livro3', 1997, 2),
   ('Livro4', 2012, 2),
   ('Livro5', 2023, 3);

-- 2. Consulta simples para listar todos os autores e seus livros associados:
SELECT Autores.Nome, Livros.Titulo
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- 3. Consulta com INNER JOIN para listar os detalhes dos livros e seus autores correspondentes:
SELECT Autores.Nome, Livros.Titulo, Livros.AnoPublicacao
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- 4. Consulta com LEFT JOIN para exibir todos os autores, independentemente de terem livros:
SELECT Autores.Nome, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- 5. Consulta com filtro por nacionalidade:
SELECT Autores.Nome, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Nacionalidade1';

-- 6. Consulta agregada para contar quantos livros cada autor escreveu:
SELECT Autores.Nome, COUNT(Livros.LivroID) AS QuantidadeLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;
