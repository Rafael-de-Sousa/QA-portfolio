describe('Sistema de Agendamento - Clínica', () => {

  beforeEach(() => {
    cy.visit('https://rafael-de-sousa.github.io/Sistema-de-Agendamento/')
    cy.window().then((win) => {
      win.localStorage.clear()
    })
  })

  it('Deve agendar consulta com sucesso', () => {

    cy.get('[data-cy="input-nome"]').type('João Silva')
    cy.get('[data-cy="input-telefone"]').type('11999999999')
    cy.get('[data-cy="input-data"]').type('2026-12-20')
    cy.get('[data-cy="input-hora"]').type('10:00')
    cy.get('[data-cy="select-especialidade"]').select('Clínico Geral')

    cy.get('[data-cy="btn-agendar"]').click()

    cy.contains('João Silva')
    cy.contains('10:00')
  })

it('Não deve permitir horário duplicado', () => {

  const data = '2026-12-20'
  const hora = '14:00'

  // Primeiro agendamento
  cy.get('[data-cy="input-nome"]').type('Maria')
  cy.get('[data-cy="input-telefone"]').type('11888888888')
  cy.get('[data-cy="input-data"]').type(data)
  cy.get('[data-cy="input-hora"]').type(hora)
  cy.get('[data-cy="select-especialidade"]').select('Cardiologia')
  cy.get('[data-cy="btn-agendar"]').click()

  // Stub do alert (ANTES do segundo submit)
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alerta')
  })

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


  it('Deve excluir agendamento', () => {

    cy.get('[data-cy="input-nome"]').type('Ana')
    cy.get('[data-cy="input-telefone"]').type('11666666666')
    cy.get('[data-cy="input-data"]').type('2026-12-21')
    cy.get('[data-cy="input-hora"]').type('09:00')
    cy.get('[data-cy="select-especialidade"]').select('Pediatria')
    cy.get('[data-cy="btn-agendar"]').click()

    cy.on('window:confirm', () => true)

    cy.get('[data-cy="btn-excluir"]').click()

    cy.contains('Ana').should('not.exist')
  })

})
