// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("loginValid",(email, passwod)=>{
    cy.visit("https://demo.nopcommerce.com/");
    cy.viewport(1024, 768);
    cy.get(".ico-login").click();
    cy.get("#Email").type(email);
    cy.get("#Password").type(passwod);
    cy.get(".button-1.login-button").click();
    cy.get(".ico-account").should("be.visible");
});


Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title')
      .each(($el, index, $list) => {
        if ($el.text().trim() === productName) {
          cy.wrap($el)
            .parents(".card.h-100")
            .find('button.btn.btn-info')
            .click()
        }
      })
  })
  