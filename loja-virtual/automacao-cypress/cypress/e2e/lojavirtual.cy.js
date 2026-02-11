describe('Loja Virtual QA - Carrinho e Checkout', () => {

  beforeEach(() => {
    // Visitar a loja virtual
    cy.visit('https://rafael-de-sousa.github.io/Loja-Virtual/')
  })

  it('Deve carregar os produtos na tela', () => {
    cy.get('#listaProdutos .card')
      .should('have.length', 4)
  })

  it('Deve adicionar produto ao carrinho', () => {
    cy.contains('Adicionar')
      .first()
      .click()

    cy.get('#carrinhoTabela tr')
      .should('have.length', 1)
  })

  it('Deve aumentar quantidade ao adicionar o mesmo produto', () => {
    cy.contains('Adicionar')
      .first()
      .click()
      .click()

    cy.get('#carrinhoTabela tr td')
      .contains('2')
  })

  it('Deve atualizar o total do carrinho', () => {
    cy.contains('Adicionar')
      .first()
      .click()

    cy.get('#totalCarrinho')
      .should('not.have.text', '0.00')
  })

  it('Deve remover item do carrinho', () => {
    cy.contains('Adicionar')
      .first()
      .click()

    cy.get('#carrinhoTabela .btn-danger')
      .click()

    cy.get('#carrinhoTabela tr')
      .should('have.length', 0)
  })

  it('Deve limpar o carrinho', () => {
    cy.contains('Adicionar')
      .first()
      .click()

    // Intercepta o confirm()
    cy.on('window:confirm', () => true)

    cy.contains('Limpar Carrinho')
      .click()

    cy.get('#carrinhoTabela tr')
      .should('have.length', 0)

    cy.get('#totalCarrinho')
      .should('have.text', '0.00')
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
