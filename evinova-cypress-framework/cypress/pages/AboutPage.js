/* The AboutPage class defines actions and elements for the About Us page in a JavaScript application. */

class AboutPage {
    pageTitle = 'h1.heading-h1';

    getPageTitle() {
        return cy.get(this.pageTitle);
    }
}

export default new AboutPage();