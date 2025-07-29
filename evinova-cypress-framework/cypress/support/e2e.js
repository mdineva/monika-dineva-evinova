import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore reCAPTCHA-related errors
  if (err.message.includes('grecaptcha is not defined')) {
    return false;
  }
});