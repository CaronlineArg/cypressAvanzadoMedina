const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'baseUrl': "https://pushing-it.vercel.app/",
   
  env:{
    usuario:"pushingit",
    contraseña:"123456!"
  },
    watchForFileChanges: false,
    defaultCommandTimeout: 4000, // Ajusta el tiempo según sea necesario
    pageLoadTimeout: 60000,
    fixturesFolder: 'cypress/e2e/',
  },
});
