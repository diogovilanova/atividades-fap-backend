# Modelo Entidade-Relacionamento (MER):

## Entidades:

* ### Livro
Atributos: ISBN (chave primária), Título, Ano de Publicação, Número de Páginas, etc.

* ### Autor
Atributos: AutorID (chave primária), Nome, Nacionalidade, Data de Nascimento, etc.

* ### Usuário
Atributos: UserID (chave primária), Nome, Endereço, E-mail, etc.

* ### Empréstimo
Atributos: EmpréstimoID (chave primária), Data de Empréstimo, Data de Devolução Prevista, etc.

## Relacionamentos:

* Um livro pode ter vários autores (Relacionamento M:N entre Livro e Autor).

* Um livro pode ser emprestado várias vezes (Relacionamento 1:N entre Livro e Empréstimo).

* Um autor pode ter escrito vários livros (Relacionamento 1:N entre Autor e Livro).

* Um usuário pode fazer vários empréstimos (Relacionamento 1:N entre Usuário e Empréstimo).

* Um livro pode ser emprestado a vários usuários (Relacionamento 1:N entre Livro e Empréstimo).


# Modelo Lógico:

## Livro:

* ISBN (Chave Primária, Tipo: VARCHAR)
* Título (Tipo: VARCHAR)
* Ano de Publicação (Tipo: INTEGER)
* Número de Páginas (Tipo: INTEGER)

## Autor:

* AutorID (Chave Primária, Tipo: INTEGER)
* Nome (Tipo: VARCHAR)
* Nacionalidade (Tipo: VARCHAR)
* Data de Nascimento (Tipo: DATE)

## Usuário:

* UserID (Chave Primária, Tipo: INTEGER)
* Nome (Tipo: VARCHAR)
* Endereço (Tipo: VARCHAR)
* E-mail (Tipo: VARCHAR)

## Empréstimo:

*EmpréstimoID (Chave Primária, Tipo: INTEGER)
*Data de Empréstimo (Tipo: DATE)
*Data de Devolução Prevista (Tipo: DATE)

## Relacionamentos e Chaves Estrangeiras:

* ### Livro-Autor (Relacionamento M:N):
* Chave Estrangeira: AutorID (Referencia Autor.AutorID)
* Chave Estrangeira: ISBN (Referencia Livro.ISBN)

* ### Livro-Empréstimo (Relacionamento 1:N):
* Chave Estrangeira: ISBN (Referencia Livro.ISBN)
* Chave Estrangeira: EmpréstimoID (Referencia Empréstimo.EmpréstimoID)

* ### Autor-Livro (Relacionamento 1:N):
* Chave Estrangeira: ISBN (Referencia Livro.ISBN)
* Chave Estrangeira: AutorID (Referencia Autor.AutorID)

* ### Usuário-Empréstimo (Relacionamento 1:N):
* Chave Estrangeira: UserID (Referencia Usuário.UserID)
* Chave Estrangeira: EmpréstimoID (Referencia Empréstimo.EmpréstimoID)

* ### Livro-Devolução (Relacionamento 1:N):
* Chave Estrangeira: ISBN (Referencia Livro.ISBN)
* Chave Estrangeira: EmpréstimoID (Referencia Empréstimo.EmpréstimoID)
