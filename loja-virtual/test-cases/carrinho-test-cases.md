Test Cases - Carrinho | Loja Virtual

Módulo: Carrinho de Compras

Responsável por gerenciar os produtos selecionados pelo usuário.

Casos de Teste

| ID   | Cenário                          | Pré-condição                 | Passos                                                                 | Resultado Esperado                                      | Status |
|------|----------------------------------|-------------------------------|------------------------------------------------------------------------|--------------------------------------------------------|--------|
| TC01 | Adicionar produto ao carrinho    | Usuário logado                | 1. Acessar catálogo <br> 2. Clicar em “Adicionar”                       | Produto adicionado ao carrinho                         | Pass   |
| TC02 | Remover produto do carrinho      | Produto no carrinho           | 1. Acessar carrinho <br> 2. Clicar em “Remover”                         | Produto removido                                       | Pass   |
| TC03 | Alterar quantidade do produto    | Produto no carrinho           | 1. Aumentar quantidade <br> 2. Atualizar                                | Quantidade atualizada                                  | Pass   |
| TC04 | Carrinho vazio                   | Nenhum produto adicionado     | 1. Acessar carrinho                                                     | Mensagem “Carrinho vazio” exibida                      | Pass   |
| TC05 | Produto fora de estoque          | Produto indisponível          | 1. Tentar adicionar produto sem estoque                                | Mensagem de indisponibilidade                          | Pass   |
| TC06 | Persistência do carrinho         | Produto adicionado            | 1. Atualizar página <br> 2. Reabrir site                                | Produtos permanecem no carrinho                        | Pass   |
| TC07 | Limite máximo de quantidade      | Produto com limite definido   | 1. Aumentar até o limite                                                | Bloqueio ao exceder limite                              | Pass   |
| TC08 | Finalizar compra pelo carrinho   | Produto no carrinho           | 1. Clicar em “Finalizar Compra”                                         | Redirecionamento para checkout                         | Pass   |
| TC09 | Atualizar preço automaticamente  | Produto no carrinho           | 1. Alterar quantidade                                                  | Valor total recalculado corretamente                   | Pass   |

