# Bug Report – Lista de Tarefas

Projeto: Lista de Tarefas  
Ambiente: Chrome 121+  
Sistema Operacional: Windows 10  
Versão da Aplicação: 1.0  
Reportado por: Rafael de Sousa  
Data: 12/02/2026  

---

## Resumo Geral

Este documento registra os defeitos identificados durante a execução dos testes funcionais, exploratórios e de segurança na aplicação Lista de Tarefas.

---

# BUG-001 – Permite cadastro de tarefas duplicadas

| Campo              | Detalhes |
|--------------------|----------|
| ID                 | BUG-001 |
| Título             | Sistema permite adicionar tarefas duplicadas |
| Tipo               | Funcional |
| Severidade         | Média |
| Prioridade         | Média |
| Status             | Aberto |

## Descrição

O sistema não valida se a tarefa já foi cadastrada anteriormente.

## Passos para Reproduzir

1. Digitar "Estudar QA"
2. Clicar em "Adicionar"
3. Repetir o mesmo processo

## Resultado Atual

A tarefa é adicionada novamente sem validação.

## Resultado Esperado

O sistema deve impedir duplicidade ou alertar o usuário.

## Impacto

Pode gerar confusão e inconsistência na lista de tarefas.

---

# BUG-002 – Falta de persistência de dados

| Campo              | Detalhes |
|--------------------|----------|
| ID                 | BUG-002 |
| Título             | Tarefas são perdidas ao atualizar a página |
| Tipo               | Funcional / Melhoria |
| Severidade         | Média |
| Prioridade         | Média |
| Status             | Aberto |

## Descrição

A aplicação não utiliza localStorage ou qualquer mecanismo de persistência.

## Passos para Reproduzir

1. Adicionar uma ou mais tarefas
2. Atualizar a página (F5)

## Resultado Atual

Todas as tarefas desaparecem.

## Resultado Esperado

As tarefas devem permanecer salvas após atualização da página.

## Impacto

Perda de dados do usuário.

---

# Resumo de Severidade

| Severidade | Quantidade |
|------------|------------|
| Média      | 2 |
| Baixa      | 0 |

---

# Conclusão

Durante a execução dos testes foram identificados:

- 2 bugs funcionais

Recomenda-se priorizar a correção do BUG-001 devido ao risco de segurança.
