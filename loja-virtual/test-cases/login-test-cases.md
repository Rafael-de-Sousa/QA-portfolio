Test Cases - Login | Loja Virtual

Módulo: Autenticação

Sistema responsável pelo acesso do usuário.

Casos de Teste

| ID   | Cenário              | Pré-condição              | Passos                                   | Resultado Esperado                  | Status |
|------|----------------------|----------------------------|------------------------------------------|-------------------------------------|--------|
| TC01 | Login com dados válidos | Usuário cadastrado no sistema | 1. Acessar tela de login <br> 2. Informar email e senha válidos <br> 3. Clicar em Entrar | Usuário autenticado com sucesso | Pass |
| TC02 | Senha inválida        | Usuário cadastrado          | 1. Informar email válido <br> 2. Informar senha errada <br> 3. Clicar em Entrar | Mensagem de erro exibida        | Pass |
| TC03 | Campos vazios         | Nenhuma                     | 1. Clicar em Entrar sem preencher campos  | Alerta de campos obrigatórios   | Pass |
| TC04 | Email inválido        | Nenhuma                     | 1. Informar email inválido <br> 2. Informar senha <br> 3. Entrar | Validação de email exibida     | Pass |
| TC05 | Limite de tentativas  | Usuário existente           | Tentar login 5x com erro                  | Conta temporariamente bloqueada | Pass |

