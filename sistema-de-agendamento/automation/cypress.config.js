const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    video: false, // Mantido falso (economiza CPU)
    screenshotOnRunFailure: false, // Mantido falso (economiza disco/processamento)
    
    // ⚡ CONFIGURAÇÕES DE PERFORMANCE:
    numTestsKeptInMemory: 0, // Padrão é 50. Reduzir para 5 evita estouro de memória RAM.
    experimentalMemoryManagement: true, // Força o Cypress a limpar a memória entre os testes.

    pageLoadTimeout: 60000, // Aumenta o limite de carregamento da página para 60s
    chromeWebSecurity: false, // Evita travas de segurança ao acessar URLs externas

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
