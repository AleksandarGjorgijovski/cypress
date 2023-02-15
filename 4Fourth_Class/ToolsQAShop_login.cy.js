///<reference types="Cypress"/>
describe('ToolsQA e2e scenario', () => {
    beforeEach("visit page", () => {
        //cy.loginViaUi(Cypress.env('username'), Cypress.env('password'))
		cy.loginViaUi('marija.radezova', '12OtherFreedom12#')
        cy.visit('https://shop.demoqa.com/')
        cy.get('.woocommerce-store-notice__dismiss-link').click();
    })

    it.only("Create order in ToolsQA", () => {
        //cy.visit("https://shop.demoqa.com/")
		
		//Celiot kod koj sleduva i e povrzan so samata login forma (17-22), se prefrluva vo novo kreiranata Custom Command (loginViaUi()), koja ke go sodrzi ovoj kontent
		//Dokolku sakame da ja povikame so pomoz na vlezni argumenti togas mozem da gi ispratime vrednostite, kako na primer username i password, pa istata ke moze da se reiskoristi za razlicni korisnici
		
        /* ==== Generated with Cypress Studio ==== */
        // cy.get('.pull-right > :nth-child(2) > a').click();
        // cy.get('#username').type('marija.radezova');
        // cy.get('#password').type('12OtherFreedom12#');
        // cy.get(':nth-child(3) > .woocommerce-button').click();
        // cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('have.text', 'marija.radezova');
        // cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('be.visible');
        /* ==== End Cypress Studio ==== */
        //cy.get('.woocommerce-store-notice__dismiss-link').click();
		
        cy.get('.pull-right > :nth-child(2) > a').click()
        cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click();
        cy.get('.woocommerce-Button').click();
	})
})