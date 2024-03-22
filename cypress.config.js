const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "specPattern": "cypress/integration/*.spec.js"
  }
      // implement node event listeners here
});
