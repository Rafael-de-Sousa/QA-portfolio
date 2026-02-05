Test Cases - Cadastro | Loja Virtual

Módulo: Registro de Usuário

Responsável pela criação de novas contas no sistema.

Casos de Teste

| ID   | Cenário                         | Pré-condição            | Passos                                                                 | Resultado Esperado                                  | Status |
|------|---------------------------------|--------------------------|------------------------------------------------------------------------|----------------------------------------------------|--------|
| TC01 | Cadastro com dados válidos       | Nenhuma                  | 1. Acessar tela de cadastro <br> 2. Preencher dados válidos <br> 3. Clicar em Cadastrar | Conta criada com sucesso                           | Pass   |
| TC02 | Email já cadastrado              | Email existente           | 1. Informar email já registrado <br> 2. Preencher senha válida <br> 3. Cadastrar | Mensagem de email já cadastrado                    | Pass   |
| TC03 | Campos obrigatórios vazios       | Nenhuma                  | 1. Não preencher nome/email <br> 2. Clicar em Cadastrar                 | Alerta de campos obrigatórios                      | Pass   |
| TC04 | Senha fraca                      | Nenhuma                  | 1. Informar senha curta/fraca <br> 2. Cadastrar                         | Mensagem de senha inválida                         | Pass   |
| TC05 | Confirmação de senha diferente   | Nenhuma                  | 1. Informar senhas diferentes <br> 2. Cadastrar                         | Mensagem de confirmação incorreta                 | Pass   |
| TC06 | Email em formato inválido        | Nenhuma                  | 1. Informar email inválido <br> 2. Cadastrar                            | Validação de formato de email exibida              | Pass   |
| TC07 | Nome com caracteres inválidos    | Nenhuma                  | 1. Informar nome com símbolos <br> 2. Cadastrar                         | Mensagem de erro no campo nome                     | Pass   |
| TC08 | Aceite de termos não marcado     | Nenhuma                  | 1. Não marcar termos <br> 2. Cadastrar                                  | Solicitação para aceitar os termos                 | Pass   |

