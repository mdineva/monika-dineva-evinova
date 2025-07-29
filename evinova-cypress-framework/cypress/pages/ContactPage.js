/* The ContactPage class defines selectors and methods for interacting with a contact form on a web
page. */

class ContactPage {

    /* These lines of code are defining selectors for various elements on a contact form page. Each
    variable is assigned a CSS selector that corresponds to a specific element on the contact form.
    Here's a breakdown of what each selector represents: */

    firstNameField = '#first_name'
    lastNameField = '#last_name'
    emailField = '#email'
    companyField = '#company'
    jobTitleField = '#title'
    countryDropdown = '[title="Country"]'
    phoneField = '#phone'
    therapeuticAreaDropdown = '[title="Therapeutic Area"]'
    interestedInDropdown = '#00NHp00001Ly5Qn'
    sendButton = '#button-pre-submit-form'
    mandatoryParamErrMsg = '#alert-first_name'

    /**
     * The `fillContactForm` function fills out a contact form with the provided data.
     * @param data - The `fillContactForm` function takes in a `data` object as a parameter. This `data`
     * object contains information about a contact such as first name, last name, email, company, job
     * title, country, phone number, therapeutic area, and interest.
     */
    fillContactForm(data) {
        if (data.firstName) cy.get(this.firstNameField).type(data.firstName);
        if (data.lastName) cy.get(this.lastNameField).type(data.lastName);
        if (data.email) cy.get(this.emailField).type(data.email);
        if (data.company) cy.get(this.companyField).type(data.company);
        if (data.jobTitle) cy.get(this.jobTitleField).type(data.jobTitle);
        if (data.country) cy.get(this.countryDropdown).select(data.country);
        if (data.phoneNumber) cy.get(this.phoneField).type(data.phoneNumber);
        if (data.therapeuticArea) cy.get(this.therapeuticAreaDropdown).select(data.therapeuticArea);
        if (data.interestedIn) cy.get(this.interestedInDropdown).select(data.interestedIn);
    }

    getSubmitFormButton() {
        return cy.get(this.sendButton);
    }

    clickSubmitFormButton() {
        return cy.get(this.sendButton).click();
    }


    getMandatoryParamErrorMessage() {
        return cy.get(this.mandatoryParamErrMsg);
    }
}

export default new ContactPage();