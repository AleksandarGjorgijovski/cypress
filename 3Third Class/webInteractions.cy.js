/// <reference types="Cypress" />
 
describe('Web Interactions Page', function() {
    it('My FirstTest case',function() {
        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
        //Static Dropdown
        
        cy.get('select').select('option2').should('have.value','option2')
        
        //autocomplete
        cy.get('#autocomplete').should('have.value','Macedonia, The Former Yugoslav Republic of')
        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        
        //radio buttons
        
        cy.get('[value="radio2"]').check().should('be.checked')

        //alerts
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        cy.get('#opentab').invoke('removeAttr','target').click()
        
        cy.url().should('include','rahulshettyacademy')
        
        cy.go('back')

    })
})