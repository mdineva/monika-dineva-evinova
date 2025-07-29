/* The HomePage class defines selectors and methods for interacting with elements on the main page of a
website. */

class HomePage {
    /**
  * Selectors definition for the main page elements
  */
    navigationMenu = '[aria-label="Main navigation"] ul li a'
    pageTitle = 'h1.heading-h1'

    /**
   * Visits the home page root URL
   */
    visit() {
        cy.visit('/');
    }

/**
 * The function `clickOnMenuItem` clicks on a menu item specified by `pageName`.
 * @param pageName - The `pageName` parameter in the `clickOnMenuItem` function represents the name of
 * the menu item that you want to click on within the navigation menu. When you call this function, you
 * would pass the specific name of the page/menu item that you want to click on as the `pageName
 */
    clickOnMenuItem(pageName) {
        cy.get(this.navigationMenu)
            .contains(pageName)
            .click();
    }
}

export default new HomePage();