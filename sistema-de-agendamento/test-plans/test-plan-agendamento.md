# Plano de Testes - Sistema de Agendamento Clínica

---

## 1. Introdução

Este documento define a estratégia, abordagem, recursos e cronograma dos testes
do Sistema de Agendamento da Clínica.

O sistema permite cadastrar, listar e remover consultas médicas,
armazenando os dados em localStorage.

---

## 2. Objetivo

Garantir que o sistema:

- Permita o cadastro correto de consultas
- Evite conflitos de horário
- Armazene os dados corretamente
- Mantenha integridade das informações
- Evite dados inválidos

---

## 3. Escopo dos Testes

### 3.1 Funcionalidades Testadas

- Cadastro de agendamento
- Validação de campos obrigatórios
- Verificação de conflito de horário
- Persistência via localStorage
- Exclusão de agendamento
- Formatação de data

### 3.2 Fora do Escopo

- Integração com banco de dados real
- Sistema de login/autenticação
- Integração com APIs externas

---

## 4. Estratégia de Testes

Serão realizados:

- Testes Funcionais
- Testes Exploratórios
- Testes de Regressão
- Testes Manuais

Automação prevista em fase futura.

---

## 5. Ambiente de Testes

- Sistema Operacional: Windows 10
- Navegador: Google Chrome
- Plataforma: Web
- Armazenamento: localStorage

---

## 6. Critérios de Entrada

- Sistema funcionando sem erros críticos de carregamento
- Código JavaScript executando corretamente
- Ambiente de navegador disponível

---

## 7. Critérios de Saída

- 100% dos casos de teste executados
- Bugs críticos identificados
- Documentação completa

---

## 8. Riscos Identificados

| Risco                          | Impacto | Mitigação |
|--------------------------------|----------|-----------|
| Falta de validação de dados    | Alto     | Criar validações futuras |
| Uso de localStorage            | Médio    | Limpar dados antes de testes |
| Dados inconsistentes           | Alto     | Reexecutar testes de regressão |

---

## 9. Cronograma Estimado

| Fase              | Duração |
|-------------------|----------|
| Planejamento      | 1 dia    |
| Criação de Casos  | 2 dias   |
| Execução          | 2 dias   |
| Documentação      | 1 dia    |

---

## 10. Responsáveis

- QA: Rafael de Sousa
- Desenvolvedor: Simulado

---

## 11. Aprovação

| Nome    | Cargo | Data       | Assinatura |
|---------|--------|------------|------------|
| Rafael  | QA     | 11/02/2026 | __________ |
