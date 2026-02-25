# Test Cases - Agendamento | Sistema Clínica

## Módulo: Novo Agendamento

Sistema responsável por cadastrar, listar e remover consultas médicas.

---

## 📋 Casos de Teste

| ID   | Cenário                                   | Pré-condição | Passos                                                                 | Resultado Esperado                                     | Status |
|------|-------------------------------------------|--------------|------------------------------------------------------------------------|-------------------------------------------------------|--------|
| TC01 | Agendar consulta com dados válidos        | Nenhum       | 1. Preencher todos os campos <br> 2. Clicar em Agendar                | Consulta adicionada na tabela                         | Passou   |
| TC02 | Tentar agendar com campos vazios          | Nenhum       | 1. Não preencher campos <br> 2. Clicar em Agendar                     | Navegador deve bloquear envio (required)              | Passou   |
| TC03 | Agendar horário já ocupado                | Consulta existente | 1. Criar consulta <br> 2. Criar outra com mesma data/hora        | Exibir alerta de conflito                             | Passou   |
| TC04 | Remover agendamento                       | Consulta existente | 1. Clicar em Excluir <br> 2. Confirmar                            | Consulta removida da tabela                           | Passou   |
| TC05 | Cancelar exclusão                         | Consulta existente | 1. Clicar em Excluir <br> 2. Cancelar confirmação                 | Consulta permanece na tabela                          | Passou   |
| TC06 | Persistência após atualizar página        | Consulta criada | 1. Criar consulta <br> 2. Atualizar página                         | Consulta permanece listada                            | Passou   |
| TC07 | Inserir data passada                      | Nenhum       | 1. Selecionar data anterior à atual <br> 2. Agendar                 | Sistema permite (BUG potencial)                       | Falhou   |
| TC08 | Inserir telefone inválido                 | Nenhum       | 1. Inserir texto no telefone <br> 2. Agendar                        | Sistema permite (sem validação)                       | Falhou   |
| TC09 | Inserir nome com caracteres especiais     | Nenhum       | 1. Inserir símbolos no nome <br> 2. Agendar                         | Sistema permite (sem validação)                       | Falhou   |
| TC10 | Testar múltiplos agendamentos diferentes  | Nenhum       | 1. Criar várias consultas com horários diferentes                    | Todas devem ser listadas corretamente                 | Passou   |

