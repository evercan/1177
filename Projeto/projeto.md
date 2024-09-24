Projeto: Biblioteca Online com TypeScript 
Este projeto consiste em desenvolver uma aplicação web que simula o sistema de gerenciamento de uma biblioteca , utilizando TypeScript para garantir a tipagem estática e organização do código. 

Funcionalidades Principais:
1. Gerenciamento do Acervo:
Cadastro de Itens:
Cadastrar diferentes tipos de itens como livros, revistas, CDs e DVDs.
Definir informações específicas de cada tipo de item (ex: ISBN para livros, editora para revistas, duração para mídias).
Controlar a localização física dos itens na biblioteca (ex: estante, prateleira).
Edição de Itens:
Atualizar as informações dos itens cadastrados.
Remoção de Itens:
Remover itens do sistema, considerando se existem empréstimos ativos para o item.
Controle de Disponibilidade:
Visualizar a disponibilidade de cada item (disponível ou emprestado).

Classes Principais: ItemAcervo, Livro, Revista, Midia, CD, DVD, Biblioteca.
Classe Abstrata: ItemAcervo - Define a estrutura base para todos os itens do acervo.
Superclasses Intermediárias: Publicacao e Midia - Categorizam os tipos de itens de forma mais específica.
Interface: Localizavel - Implementada por classes que possuem localização física.
Função Genérica: registrarItem - Permite adicionar qualquer tipo de ItemAcervo ao acervo, garantindo a tipagem correta.
Lógica de Negócio: Implementada para garantir o funcionamento correto do sistema,  validação de disponibilidade de itens.