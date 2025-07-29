/**
 * PlatformPage page object for the Platform page actions and elements focusing on "Scalable Solutions, Proven Results" flip cards
 */
class PlatformPage {
    h2Title = 'heading-h2'
    platformCards = '.div-block-123 .platform-card'
    platformCardsFront = '.platform-card__front'
    platformCardsBack = '.platform-card__back'

    scrollToHeadingByText(headingText) {
        cy.contains('h2', headingText).scrollIntoView();
    }

    getCards() {
        return cy.get(this.platformCards);
    }

    getCardFront(card) {
        return cy.wrap(card).find(this.platformCardsFront);
    }

    getCardBack(card) {
        return cy.wrap(card).find(this.platformCardsBack);
    }

    flipCard(card) {
        return cy.wrap(card).trigger('mouseover');
    }

    assertFrontVisible(card) {
        this.getCardFront(card).should('have.css', 'opacity', '1');
        this.getCardBack(card).should('have.css', 'opacity', '0');
    }

    assertBackVisible(card) {
        this.getCardFront(card).should('have.css', 'opacity', '0');
        this.getCardBack(card).should('have.css', 'opacity', '1');
    }
}

export default new PlatformPage();
