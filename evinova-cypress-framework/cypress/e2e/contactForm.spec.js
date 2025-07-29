/* The code snippet provided is a test script written in JavaScript using the Cypress testing
framework. Here's a breakdown of what the code is doing: */
import HomePage from '../pages/HomePage';
import ContactPage from "../pages/ContactPage";

describe(`Fill in Contcat Us Form - Browser: ${Cypress.browser.name}`, () => {

    beforeEach(() => {
        HomePage.visit();
        cy.handleCookiePanel();
        cy.log(`Running on browser: ${Cypress.browser.name}`);
    });

    it('should valdiate successfully filled contact us form', () => {
        HomePage.clickOnMenuItem("Contact Us");
        cy.url().should('include', '/contact-us');
        cy.fixture('contactFormData').then((data) => {
            cy.log(JSON.stringify(data));
            ContactPage.fillContactForm(data);
        });
        ContactPage.getSubmitFormButton().should('be.visible');
        cy.log('Skipping actual form submit: form is not submittable even via manual click due to misconfigured invisible reCAPTCHA on the provided URL');
    });

    it('should validate that when contact form is submitted withouth first name, error msg is returned', () => {
        HomePage.clickOnMenuItem("Contact Us");
        cy.url().should('include', '/contact-us');
        cy.fixture('contactFormData').then((data) => {
            delete data.firstName;
            ContactPage.fillContactForm(data);
        });
        ContactPage.clickSubmitFormButton();
        ContactPage.getMandatoryParamErrorMessage().should('have.text', 'This field is required.');
    });

});
