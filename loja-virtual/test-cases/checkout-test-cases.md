Test Cases - Checkout | Loja Virtual

Finalização de Compra

Responsável pelo pagamento e conclusão do pedido.

Casos de Teste

| ID   | Cenário                              | Pré-condição                  | Passos                                                                 | Resultado Esperado                                        | Status |
|------|--------------------------------------|--------------------------------|------------------------------------------------------------------------|----------------------------------------------------------|--------|
| TC01 | Finalizar compra com dados válidos    | Usuário logado + Carrinho cheio | 1. Acessar checkout <br> 2. Preencher endereço <br> 3. Informar pagamento <br> 4. Confirmar | Pedido finalizado com sucesso                            | Passou   |
| TC02 | Endereço incompleto                  | Usuário logado                 | 1. Não preencher endereço completo <br> 2. Confirmar                   | Mensagem de erro exibida                                  | Passou   |
| TC03 | Cartão inválido                      | Usuário logado                 | 1. Informar cartão inválido <br> 2. Confirmar                           | Pagamento recusado                                       | Passou   |
| TC04 | Pagamento recusado                   | Usuário logado                 | 1. Informar dados corretos com cartão recusado                         | Mensagem de falha no pagamento                            | Passou   |
| TC05 | Boleto gerado com sucesso            | Usuário logado                 | 1. Selecionar boleto <br> 2. Confirmar                                  | Boleto gerado                                             | Passou   |
| TC06 | Pix gerado com sucesso               | Usuário logado                 | 1. Selecionar Pix <br> 2. Confirmar                                     | QR Code exibido                                           | Passou   |
| TC07 | Cancelar compra no checkout          | Usuário logado                 | 1. Clicar em cancelar                                                   | Retorno ao carrinho                                       | Passou   |
| TC08 | Sessão expirada                      | Sessão inativa                 | 1. Permanecer inativo <br> 2. Confirmar compra                          | Redirecionamento para login                               | Passou   |
| TC09 | Valor alterado durante checkout      | Carrinho ativo                 | 1. Alterar quantidade em outra aba                                     | Valor atualizado corretamente                            | Passou   |
| TC10 | Confirmação por email                | Pedido finalizado              | 1. Finalizar compra                                                     | Email de confirmação enviado                             | Passou   |

