describe('Sistema de Agendamento - Clínica', () => {

  beforeEach(() => {
  // 1º: Limpa o LocalStorage com o comando nativo do Cypress (com a tela limpa)
  cy.clearLocalStorage() 

  // 2º: Visita o site do sistema
  cy.visit('https://rafael-de-sousa.github.io/Sistema-de-Agendamento/')

  // 3º: Só agora prepara o ouvido do alerta
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alerta')
  })
  })

  it('Deve permitir o cadastro de um agendamento com sucesso', () => {

    cy.get('[data-cy="input-nome"]').type('João Silva')
    cy.get('[data-cy="input-telefone"]').type('11999999999')
    cy.get('[data-cy="input-data"]').type('2026-12-20')
    cy.get('[data-cy="input-hora"]').type('10:00')
    cy.get('[data-cy="select-especialidade"]').select('Clínico Geral')

    cy.get('[data-cy="btn-agendar"]').click()

    cy.contains('João Silva')
    cy.contains('10:00')
  })



  it('Não deve permitir agendamento com números no nome', () => {
        
    // Preencher o nome com números inválidos
    cy.get('[data-cy="input-nome"]').type('123456')
    cy.get('[data-cy="input-telefone"]').type('11888888888')
    cy.get('[data-cy="input-data"]').type('2026-12-20')
    cy.get('[data-cy="input-hora"]').type('14:00')
    cy.get('[data-cy="select-especialidade"]').select('Cardiologia')

    // Tentar submeter
    cy.get('[data-cy="btn-agendar"]').click()

    // Validar se o alerta correto foi exibido
    cy.get('@alerta').should('have.been.calledWith',
        'Preencha o campo com o formato correto! O campo nome não deve conter números.')
  })

  it('Não deve permitir agendamento com letras no telefone', () => {
        
    // Preencher o nome com números inválidos
    cy.get('[data-cy="input-nome"]').type('João')
    cy.get('[data-cy="input-telefone"]').type('Maria')
    cy.get('[data-cy="input-data"]').type('2026-12-20')
    cy.get('[data-cy="input-hora"]').type('14:00')
    cy.get('[data-cy="select-especialidade"]').select('Cardiologia')

    // Tentar submeter
    cy.get('[data-cy="btn-agendar"]').click()

    // Validar se o alerta correto foi exibido
    cy.get('@alerta').should('have.been.calledWith',
      'Preencha o campo com o formato correto! O campo telefone não deve conter letras.')
  })

  it('Não deve permitir agendamento com horário duplicado', () => {

    const data = '2026-12-20'
    const hora = '14:00'

    // Primeiro agendamento
    cy.get('[data-cy="input-nome"]').type('Maria')
    cy.get('[data-cy="input-telefone"]').type('11888888888')
    cy.get('[data-cy="input-data"]').type(data)
    cy.get('[data-cy="input-hora"]').type(hora)
    cy.get('[data-cy="select-especialidade"]').select('Cardiologia')
    cy.get('[data-cy="btn-agendar"]').click()

    

    // Segundo agendamento (duplicado)
    cy.get('[data-cy="input-nome"]').type('Carlos')
    cy.get('[data-cy="input-telefone"]').type('11777777777')
    cy.get('[data-cy="input-data"]').type(data)
    cy.get('[data-cy="input-hora"]').type(hora)
    cy.get('[data-cy="select-especialidade"]').select('Dermatologia')
    cy.get('[data-cy="btn-agendar"]').click()

    // Validação correta
    cy.get('@alerta').should('have.been.calledWith',
      'Já existe uma consulta nesse horário!'
    )

  })


})
