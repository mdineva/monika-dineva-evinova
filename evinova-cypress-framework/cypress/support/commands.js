Cypress.Commands.add('handleCookiePanel', () => {
    cy.get('body').then(($body) => {
        if ($body.find('#CookieReportsPanel:visible').length) {
            cy.get('#CookieReportsBannerAZ .wscrBannerContent a')
                .contains("Decline All Optional")
                .click();
        }
    });
});
