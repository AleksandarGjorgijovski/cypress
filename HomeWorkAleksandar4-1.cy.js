describe('experimentalStudio', () => {
    beforeEach(() => {
        cy.viewport(1024, 768);
    });
    it('E2E demo.nopecommerce.com', () => {
        /* ==== Generated with Cypress Studio ==== */
cy.visit('https://demo.nopcommerce.com/');
cy.get('.ico-register').click();
cy.get('#FirstName').type('Aleksandar');
cy.get('#LastName').type('Gjorgijovski');
cy.get('#Email').type('9ace@hotmail.com');
cy.get('#Password').type('demo123');
cy.get('#ConfirmPassword').type('demo123');
cy.get('#register-button').click();
cy.get('.buttons > .button-1').click();
cy.get('a.ico-login').click();
cy.get('input#Email').type('9ace@hotmail.com');
cy.get('input#Password').type('demo123');
cy.get('button.button-1.login-button').click();
cy.get('a.ico-account').should('have.text','My account')

cy.get('div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)').click();
cy.get('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)').click();
cy.get('.content > a').click();
cy.get('#termsofservice').check();
cy.get('#checkout').click();
cy.get('#BillingNewAddress_CountryId').select('11');
cy.get('#BillingNewAddress_City').type('Bitola');
cy.get('#BillingNewAddress_Address1').type('Novosadsa');
cy.get('#BillingNewAddress_ZipPostalCode').type('7000');
cy.get('#BillingNewAddress_PhoneNumber').type('123123');
cy.get('#billing-buttons-container > .new-address-next-step-button').click();

cy.get('#paymentmethod_1').check();
cy.get('#payment-method-buttons-container > .button-1').click();
cy.get('#CreditCardType').select('MasterCard');
cy.get('#CardholderName').clear('A');
cy.get('#CardholderName').type('Aleksandar Gjorgijovski');
cy.get('#CardNumber').type('4444333322221111');
cy.get('#ExpireMonth').select('12');
cy.get('#CardCode').type('123');
cy.get('#payment-info-buttons-container > .button-1').click();
cy.get(".button-1.confirm-order-next-step-button").click();
cy.get(".button-1.order-completed-continue-button").click();
cy.get('.cart-label').click()
cy.get('.no-data').should("have.text",'Your Shopping Cart is empty!')
/* ==== End Cypress Studio ==== */
    });

});