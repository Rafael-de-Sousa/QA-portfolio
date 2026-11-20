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

  it('Deve exibir com sucesso os agendamentos cadastrados', () => {
    // cadastrando agendamento 1
    cy.get('[data-cy="input-nome"]').type('Joana')
    cy.get('[data-cy="input-telefone"]').type('1177777777')
    cy.get('[data-cy="input-data"]').type('2026-12-21')
    cy.get('[data-cy="input-hora"]').type('09:00')
    cy.get('[data-cy="select-especialidade"]').select('Clínico Geral')
    cy.get('[data-cy="btn-agendar"]').click()

    // cadastrando agendamento 2
    cy.get('[data-cy="input-nome"]').type('José')
    cy.get('[data-cy="input-telefone"]').type('1155555555')
    cy.get('[data-cy="input-data"]').type('2026-12-21')
    cy.get('[data-cy="input-hora"]').type('08:00')
    cy.get('[data-cy="select-especialidade"]').select('Ortopedia')
    cy.get('[data-cy="btn-agendar"]').click()

    // cadastrando agendamento 3
    cy.get('[data-cy="input-nome"]').type('Marina')
    cy.get('[data-cy="input-telefone"]').type('1144444444')
    cy.get('[data-cy="input-data"]').type('2026-12-21')
    cy.get('[data-cy="input-hora"]').type('10:00')
    cy.get('[data-cy="select-especialidade"]').select('Clínico Geral')
    cy.get('[data-cy="btn-agendar"]').click()

    // conferindo a visibilidade
    cy.contains('Joana').should('be.visible')
    cy.contains('José').should('be.visible')
    cy.contains('Marina').should('be.visible')
  })


})
