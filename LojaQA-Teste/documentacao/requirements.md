# Especificação de Requisitos de Software (SRS) e Escopo de Testes

**Sistema:** LojaQA-Teste  
**Versão:** 1.0.0  
**Empresa:** TechNova Solutions  
**Data:** 02/09/2026  
**Responsável pelo Teste:** Rafael de Sousa  

---

## 1. Visão Geral do Produto

### 1.1 Objetivo
O sistema LojaQA-Teste é uma aplicação web de e-commerce simplificada, desenvolvida para permitir a simulação de operações básicas de uma loja virtual. O sistema possui funcionalidades de autenticação, cadastro, busca, filtro de produtos e gerenciamento de carrinho de compras. Trata-se de um sistema frontend, sem integração com backend ou banco de dados.

---

## 2. Descrição do Sistema
O sistema é composto pelas seguintes funcionalidades:
* Login de usuário
* Cadastro de usuário
* Busca de produtos por nome
* Filtro de produtos por categoria
* Adição de produtos ao carrinho
* Cálculo automático do total do carrinho
* Limpeza do carrinho

---

## 3. Requisitos Funcionais

### RF01 – Login
O sistema deve permitir autenticação utilizando as seguintes credenciais:
* **Email:** admin@teste.com
* **Senha:** 123456

**Regras:**
* Se as credenciais estiverem corretas, o sistema deve exibir a mensagem: `"Login realizado com sucesso!"`
* Se as credenciais estiverem incorretas, deve exibir: `"Email ou senha inválidos."`

### RF02 – Cadastro
O sistema deve permitir o cadastro de um novo usuário contendo os seguintes campos obrigatórios:
* Nome
* Email
* Senha

**Regras:**
* Caso algum campo esteja vazio, o sistema deve exibir: `"Preencha todos os campos!"`
* Se todos os campos estiverem preenchidos, deve exibir: `"Cadastro realizado com sucesso!"`

### RF03 – Busca de Produto
O sistema deve permitir buscar produtos pelo nome.

**Regras:**
* A busca não deve diferenciar letras maiúsculas e minúsculas (case-insensitive).
* A lista de produtos deve ser atualizada dinamicamente.
* Caso não encontre resultados, a lista deve permanecer vazia.

### RF04 – Filtro por Categoria
Categorias disponíveis no sistema:
* Todos
* Eletrônicos
* Roupas

**Regras:**
* Ao selecionar uma categoria, apenas produtos pertencentes a ela devem ser exibidos.
* Ao selecionar "Todos", todos os produtos cadastrados devem ser exibidos.

### RF05 – Carrinho de Compras
O sistema deve permitir ao usuário:
* Adicionar produtos ao carrinho
* Listar produtos adicionados
* Calcular automaticamente o valor total
* Limpar todos os itens do carrinho

**Regras:**
* Produtos podem ser adicionados múltiplas vezes.
* O total deve ser a soma simples dos preços dos itens.
* Ao clicar em "Limpar Carrinho", a lista deve ficar vazia e o total deve retornar para zero.

---

## 4. Regras de Negócio
1. O carrinho não mantém dados após a atualização da página (F5).
2. Não existe validação real de formato de email no sistema.
3. Não existe controle ou gerenciamento de sessão de usuário.
4. Produtos podem ser adicionados repetidamente sem limite estabelecido.
5. O total do carrinho é calculado estritamente pela soma dos valores simples de cada item.

---

## 5. Escopo dos Testes
O profissional de QA deverá executar os seguintes tipos de testes:

### 5.1 Testes Funcionais
Validação de todos os requisitos funcionais descritos neste documento.

### 5.2 Testes Negativos
Testes simulando entradas inválidas, campos vazios e dados inesperados pelo sistema.

### 5.3 Testes Exploratórios
Exploração livre de comportamentos não documentados ou inconsistentes na aplicação.

### 5.4 Testes de Regressão
Validação de que alterações ou correções não impactaram funcionalidades que já estavam funcionando.

### 5.5 Testes Automatizados
Automação obrigatória dos seguintes fluxos principais:
* Login
* Cadastro
* Carrinho de Compras

**Framework exigido:** Cypress

---

## 6. Entregáveis
O profissional de QA deverá disponibilizar no repositório:
1. Plano de Teste
2. Casos de Teste detalhados
3. Relatório de Bugs (Bug Reports)
4. Projeto de automação estruturado em Cypress
5. Relatório Final de Execução de Testes

---

## 7. Critérios de Aceite
O sistema será considerado aprovado e pronto para entrega se:
* 100% dos requisitos funcionais estiverem mapeados e cobertos por casos de teste.
* Não houver nenhum bug de severidade crítica ou alta em aberto.
* Todos os testes automatizados em Cypress executarem com sucesso (pipeline verde).
* A documentação técnica estiver completamente organizada e atualizada.

