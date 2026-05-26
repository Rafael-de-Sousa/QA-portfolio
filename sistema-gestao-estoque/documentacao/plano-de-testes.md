# Plano de teste – Sistema de Gestão de Estoque
Versão: 1.0
Data: 2026
Autor: Rafael de Sousa

## 1.Objetivo
Fazer o planejamento dos testes para validar o Sistema de Gestão de Estoque, que tem como objetivo permitir que empresas registrem, consultem e gerenciem produtos armazenados em estoque.

## 2.Escopo
	2.1 Incluído
	2.1.1 Testes Funcionais
•	 RF01 – Cadastro de Produto
•	Produto cadastrado com sucesso
•	Campos obrigatórios
•	Duplicidade de código
•	Quantidade negativa
•	 RF02 – Busca de Produto
•	Busca existente
•	Busca inexistente 
•	 RF03 – Filtro por Categoria
•	Busca existente
•	Busca inexistente
•	RF04 – Remoção de Produto
•	Visualizar produto removido
	
	2.1.2 Testes Não Funcionais
•	RNF01 – Usabilidade
		O sistema deve possuir interface simples e intuitiva.
•	RNF02 – Desempenho
		A listagem de produtos deve carregar em até 2 segundos.
•	RNF03 – Compatibilidade
		O sistema deve funcionar nos navegadores:
•	Chrome
•	Edge
•	Firefox

	2.1.3 Testes Exploratórios
		Exploração de comportamentos não documentados ou inconsistentes.
	2.1.4 Testes de Regressão
		Validação de que alterações não impactam funcionalidades já testadas.
	2.1.5 Testes Automatizados
		Automação das seguintes funcionalidades:
•	Cadastro
•	Listagem
•	Busca
•	Atualização de quantidade
•	Remoção de produto
•	Filtro 
 	2.2 Não incluído
•	Testes de API
•	Testes em dispositivos como: tablet e celular

## 3. Tipos de Teste
- Testes Funcionais
- Testes Não Funcionais
- Testes Exploratórios
- Testes de Regressão
- Testes Automatizados

## 4.Ambiente de teste
- Sistema Operacional: Windows 10
- Navegadores:
   - Google Chrome
   - Microsoft Edge
   - Mozilla Firefox
## 5.Critérios de aceitação
•	Uma funcionalidade será considerada aceita quando:
•	Todos os testes funcionais passarem
•	Nenhum bug crítico estiver aberto
•	Testes de regressão forem executados
## 6. Riscos
	Exemplo:
•	Falta de validação de backend
•	Dados não persistem
•	Ausência de ambiente de homologação
•	Mudança de requisito durante execução
## 7. Cronograma
•	Planejamento: 1 dia
•	Criação de Casos de Teste: 2 dias
•	Execução Manual: 1 dia
•	Automação: 1 dia




