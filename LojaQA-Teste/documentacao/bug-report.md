# Bug Report – LojaQA - Teste

Projeto: Loja Virtual  
Ambiente: Navegador Chrome  
Versão: 1.0  

## BUG-001 – Busca de produto inexistente não exibe mensagem

**ID:** BUG-001  
**Título:** Sistema não exibe mensagem quando produto não é encontrado  
**Requisito relacionado:** RF03  
**Caso de teste:** CT03-BUSCA-02  

**Severidade:** Média  
**Prioridade:** Média  
**Status:** Aberto  

### Descrição

Ao buscar por um produto inexistente, o sistema não exibe a mensagem informando que o produto não foi encontrado.

### Passos para reproduzir:

1. Fazer login no sistema
2. Ir até o campo **Buscar Produtos**
3. Digitar um nome de produto que não existe
4. Clicar em **Buscar**

###  Resultado Atual

- Nenhuma mensagem é exibida
- Todos os produtos da seção "Produtos" desaparecem

### Resultado Esperado

O sistema deve exibir a mensagem:
Produto não encontrado.

## Impacto

Pode gerar confusão no usuário e prejudicar a usabilidade do site.

# Conclusão

Durante a execução dos testes foi identificado:

- 1 bug funcional

