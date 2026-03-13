# Test Execution Report – LojaQA - Teste

Projeto: LojaQA - Teste 
Versão testada: 1.0  
Ambiente: Navegador Chrome  
Sistema Operacional: Windows 10  
Executado por: Rafael de Sousa  
Data da execução: 2026

---

# Objetivo

Executar os casos de teste definidos para validar as principais funcionalidades da aplicação, garantindo que os requisitos funcionais estejam sendo atendidos.

---

# Escopo dos Testes

Foram testadas as seguintes funcionalidades:

- Login de usuários
- Cadastro de usuários
- Busca de produtos
- Filtro por categoria
- Carrinho de compras

---

# Resumo da Execução

| Métrica | Quantidade |
|------|------|
Total de casos de teste | 12 |
Casos executados | 12 |
Casos aprovados | 11 |
Casos reprovados | 1 |
Taxa de sucesso | 91.6% |

---

# Resultado por Funcionalidade

| Funcionalidade | Casos de Teste | Aprovados | Reprovados |
|------|------|------|------|
Login | 3 | 3 | 0 |
Cadastro | 2 | 2 | 0 |
Busca de Produtos | 2 | 1 | 1 |
Filtro de Categoria | 2 | 2 | 0 |
Carrinho | 3 | 3 | 0 |

---

# Bugs Identificados

| ID | Título | Severidade | Status |
|------|------|------|------|
BUG-001 | Busca de produto inexistente não exibe mensagem | Média | Aberto |

---

# Principais Problemas Encontrados

Durante os testes foi identificado um problema na funcionalidade de busca de produtos.

Ao buscar um produto inexistente:

- o sistema não exibe mensagem de erro
- todos os produtos da lista desaparecem

Isso pode causar confusão ao usuário.

---

# Conclusão

A aplicação apresentou bom desempenho na maioria das funcionalidades testadas.

Dos **12 casos de teste executados**, **11 foram aprovados**, resultando em **91.6% de sucesso**.

Entretanto, foi identificado **1 bug funcional na busca de produtos**, que deve ser corrigido para melhorar a experiência do usuário.

Após a correção do bug identificado, recomenda-se a execução de testes de regressão.


