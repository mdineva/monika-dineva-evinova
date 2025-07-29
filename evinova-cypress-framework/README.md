# Evinova Cypress Automation Framework

## 📘 Overview

This is a **frontend UI automation framework** for [evinova.com](https://evinova.com), built with **Cypress v13.15.0**.  
It validates user journeys, UI behavior, and form interactions while following the **Page Object Model (POM)** pattern.


### ✅ Core Features

- 🔄 Cross-browser testing (Chrome, Firefox, Electron)
- 🔍 Flip card content visibility testing
- 📝 Contact form validation with data from fixture
- 🧭 Page navigation & section assertions
- 📄 Custom Cypress commands (e.g., cookie panel handling)
- 📊 Test reporting with **Mochawesome**
- 🤖 Optional AI-powered docs via **Mintlify**


## 🧰 Tech Stack

| Tool            | Version        | Purpose                        |
|-----------------|----------------|--------------------------------|
| Cypress         | ^13.15.0       | End-to-end test runner         |
| Node.js         | ^16.x          | Runtime environment            |
| Mochawesome     | ^7.1.3         | HTML/JSON test reporting       |
| Cypress Terminal Report | ^7.2.1 | CLI log output for Cypress     |
| Mintlify Docs   | *(Optional)*   | Generate smart documentation   |


## 🚀 Running Tests

### 🧪 Running Tests on specific browser
- npm run test:chrome     # Chrome
- npm run test:firefox    # Firefox
- npm run test:electron   # Electron (headless)

### 🌐 Running Tests in all browsers
- npm run test:all

## 📊 Generating Reports
1. Clean old results:
    npm run clean:reports
2. Run test and generate report:
    npm run test:report
3. Open the report:
    npm run report:open

## 📎 Notes
- ❗ Contact Us form is protected with an invisible reCAPTCHA, so submission is skipped in tests.
- ✔️ Cookie handling is automated with cy.handleCookiePanel()


