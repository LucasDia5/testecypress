const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
  reporterEnabled: 'cypress-mochawesome-reporter',
  cypressMochawesomeReporterReporterOptions:{
  charts:true,
  reportPageTitle: 'Relatório de testes',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false  
    } 
  },
  video:true,
});
