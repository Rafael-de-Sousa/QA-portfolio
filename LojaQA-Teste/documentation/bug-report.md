# Bug Report – LojaQA - Teste

Projeto: LojaQA - Teste  
Ambiente: Navegador Chrome  
Versão: 1.0  

## BUG-001 – Sistema aceita cadastro com email inválido

**ID:** BUG-001  
**Título:** Sistema aceita cadastro com email inválido  
**Requisito relacionado:** RF02  
**Caso de teste:** CT07  
**Status:** Aberto  

### Descrição

Ao tentar fazer o cadastro, se o usuário inserir um email inválido, sem o @, por exemplo, o sistema aceita o cadastro.

### Passos para reproduzir:

1- Acessar o site da loja  
2- Na seção cadastro, inserir nome (Ex: Novo Usuário), email inválido (Ex: novousuariogmail.com - sem o @ ou formato incorreto) e criar senha (Ex: abc123)  
3- Clicar em 'Cadastrar'

###  Resultado Atual

- O sistema não exibe a mensagem 'Email inválido!'  
- Exibe a mensagem 'Cadastro realizado com sucesso!'

### Resultado Esperado

O sistema deve exibir a mensagem: 'Email inválido!'

## BUG-002 – Busca de produto inexistente não exibe mensagem

**ID:** BUG-002  
**Título:** Sistema não exibe mensagem quando produto não é encontrado   
**Requisito relacionado:** RF03  
**Caso de teste:** CT14  
**Status:** Aberto   

### Descrição

Ao buscar por um produto inexistente, o sistema não exibe a mensagem informando que o produto não foi encontrado.

### Passos para reproduzir:

1- Na seção Buscar Produto, inserir o nome de um produto inexistente (Ex: produtonãoexiste)   
2- Clicar em 'Buscar'

###  Resultado Atual

- Nenhuma mensagem é exibida

### Resultado Esperado

O sistema deve exibir a mensagem:  
Produto não encontrado!

# Conclusão

Durante a execução dos testes foi identificado:

- 2 bugs funcionais



