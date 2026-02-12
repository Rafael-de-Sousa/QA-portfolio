# Test Plan – Lista de Tarefas

## 1. Objetivo

Validar o correto funcionamento da aplicação "Lista de Tarefas", garantindo que as funcionalidades de adicionar e remover tarefas funcionem conforme esperado.

---

## 2. Escopo

### Incluído:
- Adição de tarefas
- Validação de campo obrigatório
- Remoção de tarefas
- Adição via tecla Enter

### Não Incluído:
- Persistência de dados (localStorage)
- Testes mobile
- Testes de segurança automatizados
- Testes de API

---

## 3. Tipos de Teste

- Testes Funcionais
- Testes Negativos
- Testes Exploratórios
- Testes de Regressão
- Testes de Performance básicos

---

## 4. Ambiente de Teste

- Navegador: Google Chrome
- Sistema Operacional: Windows 10
- Linguagens: HTML, CSS, JavaScript
- Automação: Cypress

---

## 5. Critérios de Aceitação

- Tarefas devem ser adicionadas corretamente
- Campo vazio não deve permitir cadastro
- Tarefas devem ser removidas corretamente
- Sistema não deve quebrar visualmente com textos longos

---

## 6. Riscos Identificados

- Falta de persistência de dados
- Permissão de tarefas duplicadas
