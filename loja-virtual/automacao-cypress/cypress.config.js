const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    video: false, // Mantido falso (economiza CPU)
    screenshotOnRunFailure: false, // Mantido falso (economiza disco/processamento)
    
    // ⚡ CONFIGURAÇÕES DE PERFORMANCE:
    numTestsKeptInMemory: 5, // Padrão é 50. Reduzir para 5 evita estouro de memória RAM.
    experimentalMemoryManagement: true, // Força o Cypress a limpar a memória entre os testes.
    
    setupNodeEvents(on, config) {
      // Limpa o cache do navegador no início para liberar memória
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // Desativa extensões e aceleração de hardware se necessário
          launchOptions.args.push('--disable-dev-shm-usage');
        }
        return launchOptions;
      });
    },
  },
});
