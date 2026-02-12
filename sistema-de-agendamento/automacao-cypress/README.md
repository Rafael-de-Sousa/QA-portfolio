# Automação de Testes - Sistema de Agendamento

Este projeto contém a automação E2E desenvolvida com **Cypress** para validar o funcionamento do Sistema de Agendamento da Clínica.

---

## Objetivo da Automação

Garantir que as principais funcionalidades do sistema estejam funcionando corretamente, validando:

- Cadastro de consulta
- Bloqueio de horário duplicado
- Exclusão de agendamento
- Validações de regras de negócio

---

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Testes End-to-End (E2E)

---

## Estrutura da Automação

```
automacao-cypress/
│
├── cypress/
│   └── e2e/
│       └── agendamento.cy.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Como Executar os Testes

### Instalar dependências

Dentro da pasta `automacao-cypress`:

```bash
npm install
```

### Abrir o Cypress

```bash
npx cypress open
```

ou rodar em modo headless:

```bash
npx cypress run
```

---

## Cenários Automatizados

### Deve agendar consulta com sucesso
Valida que um novo agendamento é criado corretamente e exibido na tabela.

### Não deve permitir horário duplicado
Valida a regra de negócio que impede dois agendamentos no mesmo horário.

### Deve excluir agendamento
Valida a remoção correta de um agendamento existente.

---

## Evolução do Projeto

Bug identificado: Permitia horário duplicado  
Bug corrigido no sistema  
Automação criada para validar a regra de negócio  
Testes passando após correção  



