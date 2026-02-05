Test Cases - Checkout | Loja Virtual

Finalização de Compra

Responsável pelo pagamento e conclusão do pedido.

Casos de Teste

| ID   | Cenário                              | Pré-condição                  | Passos                                                                 | Resultado Esperado                                        | Status |
|------|--------------------------------------|--------------------------------|------------------------------------------------------------------------|----------------------------------------------------------|--------|
| TC01 | Finalizar compra com dados válidos    | Usuário logado + Carrinho cheio | 1. Acessar checkout <br> 2. Preencher endereço <br> 3. Informar pagamento <br> 4. Confirmar | Pedido finalizado com sucesso                            | Pass   |
| TC02 | Endereço incompleto                  | Usuário logado                 | 1. Não preencher endereço completo <br> 2. Confirmar                   | Mensagem de erro exibida                                  | Pass   |
| TC03 | Cartão inválido                      | Usuário logado                 | 1. Informar cartão inválido <br> 2. Confirmar                           | Pagamento recusado                                       | Pass   |
| TC04 | Pagamento recusado                   | Usuário logado                 | 1. Informar dados corretos com cartão recusado                         | Mensagem de falha no pagamento                            | Pass   |
| TC05 | Boleto gerado com sucesso            | Usuário logado                 | 1. Selecionar boleto <br> 2. Confirmar                                  | Boleto gerado                                             | Pass   |
| TC06 | Pix gerado com sucesso               | Usuário logado                 | 1. Selecionar Pix <br> 2. Confirmar                                     | QR Code exibido                                           | Pass   |
| TC07 | Cancelar compra no checkout          | Usuário logado                 | 1. Clicar em cancelar                                                   | Retorno ao carrinho                                       | Pass   |
| TC08 | Sessão expirada                      | Sessão inativa                 | 1. Permanecer inativo <br> 2. Confirmar compra                          | Redirecionamento para login                               | Pass   |
| TC09 | Valor alterado durante checkout      | Carrinho ativo                 | 1. Alterar quantidade em outra aba                                     | Valor atualizado corretamente                            | Pass   |
| TC10 | Confirmação por email                | Pedido finalizado              | 1. Finalizar compra                                                     | Email de confirmação enviado                             | Pass   |

