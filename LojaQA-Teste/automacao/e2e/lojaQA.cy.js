describe('LojaQA - Testes E2E', () => {

  beforeEach(() => {
    cy.visit('index.html')
  })

  // LOGIN

  it('CT01-LOGIN-01 - Login com credenciais válidas', () => {
    cy.get('[data-cy="login-email"]').type('admin@teste.com')
    cy.get('[data-cy="login-password"]').type('123456')
    cy.get('[data-cy="login-btn"]').click()

    cy.contains('Login realizado com sucesso!')
      .should('be.visible')
  })

  it('CT01-LOGIN-02 - Login com senha incorreta', () => {
    cy.get('[data-cy="login-email"]').type('admin@teste.com')
    cy.get('[data-cy="login-password"]').type('000000')
    cy.get('[data-cy="login-btn"]').click()

    cy.contains('Email ou senha inválidos.')
      .should('be.visible')
  })

  it('CT01-LOGIN-03 - Login com email incorreto', () => {
    cy.get('[data-cy="login-email"]').type('adminteste.com')
    cy.get('[data-cy="login-password"]').type('123456')
    cy.get('[data-cy="login-btn"]').click()

    cy.contains('Email ou senha inválidos.')
      .should('be.visible')
  })

  // CADASTRO

  it('CT02-CADASTRO-01 - Cadastro com dados válidos', () => {
    cy.get('[data-cy="register-name"]').type('Rafael')
    cy.get('[data-cy="register-email"]').type('rafael@teste.com')
    cy.get('[data-cy="register-password"]').type('123456')

    cy.get('[data-cy="register-btn"]').click()

    cy.contains('Cadastro realizado com sucesso!')
      .should('be.visible')
  })

  it('CT02-CADASTRO-02 - Cadastro com campos vazios', () => {
    cy.get('[data-cy="register-btn"]').click()

    cy.contains('Preencha todos os campos!')
      .should('be.visible')
  })

  // BUSCA

  it('CT03-BUSCA-01 - Buscar produto existente', () => {
    cy.get('[data-cy="search-input"]').type('Notebook')
    cy.get('[data-cy="search-btn"]').click()

    cy.get('[data-cy="product-list"]')
    cy.contains('Notebook')
      .should('be.visible')
  })

  // FILTRO

  it('CT04-FILTRO-01 - Filtrar por categoria', () => {
    cy.get('[data-cy="category-filter"]').select('Eletrônicos')

    cy.get('[data-cy="product-list"]')
      .should('exist')
  })

  it('CT04-FILTRO-02 - Mostrar todas as categorias', () => {
    cy.get('[data-cy="category-filter"]').select('Todos')

    cy.get('[data-cy="product-list"]')
      .should('exist')
  })

  // CARRINHO

  it('CT05-CARRO-01 - Adicionar produto ao carrinho', () => {
    cy.contains('Adicionar')
      .first()
      .click()

    cy.get('[data-cy="cart-list"]')
      .should('be.visible')
  })

  it('CT05-CARRO-04 - Limpar carrinho', () => {
    cy.contains('Adicionar')
      .first()
      .click()

    cy.get('[data-cy="clear-cart"]').click()

    cy.contains('Total: R$ 0')
      .should('be.visible')
  })

})
