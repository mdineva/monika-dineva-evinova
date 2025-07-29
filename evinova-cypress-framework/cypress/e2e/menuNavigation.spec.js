import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage';

describe(`Navigation to Subpages - Browser: ${Cypress.browser.name}`, () => {

/* The `beforeEach` function in this code snippet is a hook provided by the testing framework 
that runs before each test case within the `describe` block. */
    beforeEach(() => {
        HomePage.visit();
        cy.handleCookiePanel();
        cy.log(`Running on browser: ${Cypress.browser.name}`);
    });

    it('should successfully navigate to About Us page', () => {
        HomePage.clickOnMenuItem("About Us");
        cy.url().should('include', '/about-us');
        AboutPage.getPageTitle().should('have.text', 'About Evinova');
    });

});
