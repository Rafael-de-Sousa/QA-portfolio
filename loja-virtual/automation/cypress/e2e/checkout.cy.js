describe('Loja Virtual QA - Checkout', () => {

  beforeEach(() => {
    // Visitar a loja virtual
    cy.visit('https://rafael-de-sousa.github.io/Loja-Virtual/')
  })

  it('Deve abrir o modal ao finalizar compra', () => {
    cy.contains('Adicionar')
      .first()
      .click()

    cy.contains('Finalizar Compra')
      .click()

    cy.get('#modalCheckout')
      .should('be.visible')
  })

  it('Deve finalizar compra com sucesso', () => {
    cy.contains('Adicionar')
      .first()
      .click()

    cy.contains('Finalizar Compra')
      .click()

    cy.get('#modalCheckout')
      .should('be.visible')

    cy.get('#nome')
      .type('Rafael QA')

    cy.get('#email')
      .type('rafa@test.com')

    cy.get('#endereco')
      .type('Rua Teste, 123')

    cy.get('#pagamento')
      .select('Pix')

    // Intercepta alert()
    cy.on('window:alert', (msg) => {
      expect(msg).to.contains('Pedido realizado com sucesso')
    })

    cy.get('#formCheckout')
      .submit()

    cy.get('#carrinhoTabela tr')
      .should('have.length', 0)

    cy.get('#totalCarrinho')
      .should('have.text', '0.00')
  })

})
