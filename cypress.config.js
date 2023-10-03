const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    urlBase: 'https://buger-eats.vercel.app/'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
