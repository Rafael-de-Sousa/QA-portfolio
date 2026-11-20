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

  it('Deve excluir o agendamento com sucesso', () => {

    cy.get('[data-cy="input-nome"]').type('Ana')
    cy.get('[data-cy="input-telefone"]').type('1166666666')
    cy.get('[data-cy="input-data"]').type('2026-12-21')
    cy.get('[data-cy="input-hora"]').type('09:00')
    cy.get('[data-cy="select-especialidade"]').select('Pediatria')
    cy.get('[data-cy="btn-agendar"]').click()

    cy.on('window:confirm', () => true)

    cy.get('[data-cy="btn-excluir"]').click()

    cy.contains('Ana').should('not.exist')
  })

})
