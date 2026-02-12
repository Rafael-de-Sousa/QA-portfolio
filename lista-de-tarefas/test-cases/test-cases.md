# Test Cases – Lista de Tarefas

| ID    | Título                              | Pré-condição        | Passos                                                                 | Resultado Esperado                                              | Tipo de Teste |
|-------|--------------------------------------|---------------------|------------------------------------------------------------------------|-----------------------------------------------------------------|---------------|
| CT-01 | Adicionar tarefa válida              | Sistema aberto      | 1. Digitar "Estudar QA" <br> 2. Clicar em "Adicionar"                 | Tarefa deve aparecer na lista e campo deve ser limpo            | Funcional     |
| CT-02 | Adicionar tarefa via Enter           | Sistema aberto      | 1. Digitar "Treinar Cypress" <br> 2. Pressionar Enter                  | Tarefa deve ser adicionada corretamente                         | Funcional     |
| CT-03 | Validar campo vazio                  | Sistema aberto      | 1. Clicar em "Adicionar" sem preencher o campo                        | Exibir alerta e nenhuma tarefa deve ser adicionada              | Negativo      |
| CT-04 | Validar apenas espaços em branco     | Sistema aberto      | 1. Digitar "     " <br> 2. Clicar em "Adicionar"                       | Exibir alerta e nenhuma tarefa deve ser adicionada              | Negativo      |
| CT-05 | Remover tarefa                       | Tarefa existente    | 1. Clicar em "Remover"                                                 | Tarefa deve ser removida da lista                               | Funcional     |
| CT-06 | Adicionar texto muito longo          | Sistema aberto      | 1. Inserir texto com 300+ caracteres <br> 2. Clicar em "Adicionar"     | Layout não deve quebrar e texto deve permanecer visível         | UI / Exploratório |

