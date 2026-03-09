ID	Título	Requisito	Prioridade	Pré-condição	Passos	Resultado Esperado	Tipo	Passível de automação	Regressivo obrigatório	Status	Observações
CT01-LOGIN-01	Login com credenciais válidas	RF01	Alta	Usuário na tela inicial	"1. Inserir email admin@teste.com
2. Inserir senha 123456
3. Clicar em Entrar"	Exibir "Login realizado com sucesso!"	Funcional	Sim	Sim	PASSOU	
CT01-LOGIN-02	Login com senha incorreta	RF01	Alta	Usuário na tela inicial	"1. Inserir email admin@teste.com
2. Inserir senha 000000
3. Clicar em Entrar"	Exibir "Email ou senha inválidos."	Funcional	Sim	Sim	PASSOU	
CT01-LOGIN-03	Login com email incorreto	RF01	Alta	Usuário na tela inicial	"1. Inserir email adminteste.com
2. Inserir senha 000000
3. Clicar em Entrar"	Exibir "Email ou senha inválidos."	Funcional	Sim	Sim	PASSOU	
											
CT02-CADASTRO-01	Cadastro com todos os campos preenchidos.	RF02	_	"Usuário na tela inicial
"	"1. Inserir nome
2. Inserir email
3. Inserir senha
4. Clicar em Cadastrar"	"Exibir:
""Cadastro realizado com sucesso!"""	"Funcional
"	Sim	Sim	PASSOU	
											
CT02-CADASTRO-02	Cadastro com campos vazios.	RF02	_	Usuário na tela inicial	"1.Deixar algum ou todos os campos vazios
2. Clicar em Cadastrar"	"Exibir:
""Preencha todos os campos!"""	Funcional	Sim	Sim	PASSOU	
CT03-BUSCA-01	Busca pelo nome do produto	RF03	_	Usuário logado	"1. Digitar o nome do produto no campo Buscar Produtos
2. Clicar em Buscar"	O produto pesquisado deve aparecer na seção Produtos	Funcional	Sim	Sim	PASSOU	
CT03-BUSCA-02 	Busca produto inexistente	RF03	_	Usuário logado	"1. Digitar o nome do produto no campo Buscar Produtos
2. Clicar em Buscar"	Exibir mensagem "Produto não encontrado"	Funcional	Sim	Sim	Reprovado	Não exibe a mensagem "Produto não encontrado". Além disso, todos os produtos da seção Produtos somem, o que pode deixar o usuário perdido.
CT04-FILTRO-01	Buscar em uma categoria	RF04	Média	Usuário logado	"1. Na seção Filtrar por Categoria, clicar no campo de escolha
2. Clicar em uma das categorias exibidas"	Exibir produtos da categoria pesquisada na seção Produtos	Funcional	Sim	Sim	PASSOU	
CT04-FILTRO-02	Buscar em todas as categorias	RF04	Média	Usuário na tela inicial	"1. Na seção Filtrar por Categoria, clicar no campo de escolha
2. Clicar em Todos"	Exibir todos os produtos na seção Produtos	Funcional	Sim	Sim	PASSOU	
CT05-CARRO-01	"
Adicionar produtos ao carrinho
"	RF05	Alta	Usuário logado	"1.Na seção Produtos, escolher produto
2. clicar em Adicionar
"	O produto selecionado deve ser exibido na seção Carrinho com nome e valor total.	Funcional	Sim	Sim	PASSOU	
CT05-CARRO-02	Listar produtos adicionados	RF05	Alta	"1. Usuário logado
2. Produtos cadastrados no sistema"	"1.Na seção Produtos, escolher produto
2. clicar em Adicionar
3. Repetir várias vezes os passos citados"	Os produtos devem aparecer listados na seção Carrinho	Funcional	Sim	Sim	PASSOU	
CT05-CARRO-03	Calcular automaticamente o valor total	RF05	Alta	"1. Usuário logado
2. Produtos cadastrados no sistema"	"1.Na seção Produtos, escolher produto
2. clicar em Adicionar
3. Repetir várias vezes os passos citados"	Na seção Carrinho, no campo Total, os valores devem ser somados um ao outro	Funcional	Sim	Sim	PASSOU	
CT05-CARRO-04	Limpar todos os itens do carrinho	RF05	Alta	"1. Usuário na tela inicial
2. Carrinho com vários produtos adicionados"	1.Clicar no botão Limpar Carrinho	A lista de produtos adicionados deve ser desfeita e o campo Total deve retornar para zero	Funcional	Sim	Sim	PASSOU	
<img width="1710" height="1272" alt="image" src="https://github.com/user-attachments/assets/89125319-d73b-4be1-a264-f8eee7460674" />
