const { defineConfig } = require('cypress');

module.exports = defineConfig({
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'results',
        overwrite: false,
        html: false,
        json: true,
        screenshotOnRunFailure: true,
    },
    e2e: {
        baseUrl: 'https://evinova.com',
        supportFile: 'cypress/support/e2e.js',
        specPattern: 'cypress/e2e/**.spec.js',
    }
});