# Bug Report - Permite Agendamento com Data Passada

---

## Informações Gerais

- **ID:** BUG-001
- **Título:** Sistema permite agendar consulta em data anterior à atual
- **Módulo:** Agendamento
- **Ambiente:** Web - Chrome
- **Versão:** v1.0
- **Reportado por:** Rafael de Sousa
- **Data:** 11/02/2026

---

## Descrição

O sistema permite o cadastro de consultas com datas anteriores à data atual, o que não é um comportamento esperado para um sistema de agendamento médico.

---

## Passos para Reproduzir

1. Acessar o sistema
2. Preencher todos os campos
3. Selecionar uma data anterior à data atual
4. Clicar em "Agendar Consulta"

---

## Resultado Esperado

O sistema deve bloquear o agendamento e exibir mensagem informando que a data é inválida.

---

## Resultado Atual

A consulta é cadastrada normalmente na tabela.

---

## Severidade e Prioridade

- **Severidade:** Alta
- **Prioridade:** Alta

---

## Observações

Pode gerar erros operacionais e inconsistência no sistema.

