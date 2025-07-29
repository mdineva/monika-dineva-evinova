import PlatformPage from "../pages/PlatformPage";
import HomePage from '../pages/HomePage';

describe(`Platform section, flip cards validation - Browser: ${Cypress.browser.name}`, () => {

    beforeEach(() => {
        HomePage.visit();
        cy.handleCookiePanel();
        HomePage.clickOnMenuItem("Platform");
        PlatformPage.scrollToHeadingByText("Scalable Solutions, Proven Results");
        cy.log(`Running on browser: ${Cypress.browser.name}`);
    });

    it('should verify all 4 cards flip correctly', () => {
        PlatformPage.getCards().should('have.length', 4);
        PlatformPage.getCards().each((card) => {
            PlatformPage.assertFrontVisible(card);
            PlatformPage.flipCard(card);
            PlatformPage.assertBackVisible(card);
        });
    });
});