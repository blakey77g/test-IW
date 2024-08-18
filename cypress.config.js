const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  defaultCommandTimeout: 70000,
  

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://platform.withintelligence.com/login",
    
   
  },
});