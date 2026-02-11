# Bug Report - Telefone sem Validação

---

## Informações Gerais

- **ID:** BUG-002
- **Título:** Sistema permite cadastro com telefone inválido
- **Módulo:** Agendamento
- **Ambiente:** Web - Chrome
- **Versão:** v1.0
- **Reportado por:** Rafael
- **Data:** 11/02/2026

---

## Descrição

O sistema aceita qualquer valor no campo telefone, incluindo texto e caracteres especiais, sem validação de formato.

---

## Passos para Reproduzir

1. Acessar o sistema
2. Inserir nome válido
3. Inserir "abc123" no campo telefone
4. Preencher demais campos corretamente
5. Clicar em "Agendar Consulta"

---

## Resultado Esperado

O sistema deve validar o formato do telefone e impedir o cadastro caso esteja inválido.

---

## Resultado Atual

O sistema permite o cadastro normalmente.

---

## Severidade e Prioridade

- **Severidade:** Média
- **Prioridade:** Média

---

## Observações

Pode gerar dificuldade de contato com pacientes.
