# Test Cases - Agendamento | Sistema Clínica

## Módulo: Novo Agendamento

Sistema responsável por cadastrar, listar e remover consultas médicas.

---

##  Casos de Teste

ID	Título	Requisito	Funcionalidade	Cenário	Pré-condição	Passos	Resultado Esperado	Resultado Obtido	Status
CT-01	Agendamento com sucesso	RF-01	Agendamento	Validar que o sistema permita o cadastro de um agendamento mediante o preenchimento dos campos obrigatórios definidos na interface.	Usuário autenticado na tela inicial do sistema.	"1. Acessar a tela de agendamento.
2. Preencher os campos obrigatórios com dados válidos: Nome do Paciente=""Carlos Silva"", Telefone=""11999999999"", Data=""20/12/2026"", Hora=""10:00"", Especialidade=""Clínico Geral"".
3. Clicar em ""Agendar Consulta""."	Exibição de mensagem clara na tela: "Consulta agendada com sucesso!".	O sistema exibiu a mensagem: "Consulta agendada com sucesso!".	Passou.
CT-02	Campos obrigatórios vazios	RF-02	Agendamento	Validar que o sistema não permita o agendamento com campos obrigatórios vazios.	Usuário na tela de agendamento.	"1. Deixar os campos ""Nome do Paciente"" e ""Telefone"" totalmente em branco.
2. Preencher os demais campos com dados válidos.
3. Clicar em ""Agendar Consulta""."	O sistema impede o registro e destaca os campos em branco com a mensagem: "Preencha este campo.".	O sistema impediu o registro e destacou os campos mostrando a mensagem: "Preencha este campo.".	Passou.
CT-03	Formatos de dados inválidos (Nome do Paciente)	RF-03	Agendamento	Validar que o sistema não permita o agendamento com dados em formato inválido no campo "Nome do Paciente".	Usuário na tela de agendamento.	"1. Preencher o campo ""Nome do Paciente"" com dado inválido: Nome do Paciente=""123456"".
2. Preencher os demais campos com dados válidos: Telefone=""11999999999"", Data=""20/12/2026"", Hora=""11:00"", Especialidade=""Clínico Geral"".
3. Clicar em ""Agendar Consulta""."	O sistema não registra o agendamento e exibe a mensagem: "Preencha o campo com o formato correto.".	O sistema não registrou o agendamento e exibiu a mensagem: "Preencha o campo com o formato correto.".	Passou.
CT-04	Formatos de dados inválidos (Telefone)	RF-03	Agendamento	Validar que o sistema não permita o agendamento com dados em formato inválido no campo "Telefone".	Usuário na tela de agendamento.	"1. Preencher o campo ""Telefone"" com dado inválido: Telefone=""ABCDE"".
2. Preencher os demais campos com dados válidos: Nome do Paciente=""Carlos Silva"", Data=""20/12/2026"", Hora=""11:00"", Especialidade=""Clínico Geral"".
3. Clicar em ""Agendar Consulta""."	O sistema não registra o agendamento e exibe a mensagem: "Preencha o campo com o formato correto.".	O sistema não registrou o agendamento e exibiu a mensagem: "Preencha o campo com o formato correto.".	Passou.
CT-05	Horário duplicado	RF-05	Agendamento	Validar que o sistema não permita o agendamento em um horário já ocupado.	Existir o agendamento cadastrado no CT-01 (Data="20/12/2026" e Hora="10:00"). Usuário na tela de agendamento.	"1. Preencher os campos obrigatórios utilizando o mesmo horário já cadastrado: Nome do Paciente=""Carlos"", Telefone=""11777777777"", Data=""20/12/2026"", Hora=""10:00"", Especialidade=""Clínico Geral"".
2. Clicar em ""Agendar Consulta""."	O sistema não cadastra o agendamento e exibe a mensagem: "Já existe uma consulta nesse horário!".	O sistema não cadastrou o agendamento e exibiu a mensagem: "Já existe uma consulta nesse horário!".	Passou.
CT-06	Consulta de agendamentos existentes	RF-06	Consulta	Validar que o sistema permita a visualização dos agendamentos registrados.	Existir o agendamento cadastrado no CT-01 (Data="20/12/2026" e Hora="10:00"). Usuário na tela inicial.	"1. Acessar a página inicial.
2. Visualizar a seção ""Consultas Agendadas""."	Os agendamentos existentes são apresentados corretamente na seção de consulta.	O sistema exibiu corretamente as consultas agendadas.	Passou.
CT-07	Exclusão de agendamento com sucesso	RF-01	Exclusão	Validar a exclusão de um agendamento existente.	Existir o agendamento cadastrado no CT-01. Usuário na tela inicial.	"1. Acessar a seção ""Consultas Agendadas"" na página inicial.
2. Identificar o agendamento que será excluído.
3. Clicar no botão ""Excluir"" e confirmar a ação."	O sistema exibe a mensagem pedindo a confirmação da exclusão. Após confirmar, o agendamento é excluído com sucesso e não é mais exibido na seção "Consultas Agendadas".	O sistema mostrou a mensagem pedindo confirmação e excluiu o agendamento com sucesso.	Passou.
<img width="1891" height="738" alt="image" src="https://github.com/user-attachments/assets/4e56acc7-b678-4c53-b283-434d4949436e" />

