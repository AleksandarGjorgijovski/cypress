/// <reference types="Cypress"/>

describe("Returning values in Cypress",()=>{
    it("Get random number",()=>{
        cy.visit('./randomNumber.html') 
        //cy.get('#random-number').should('be.gt',0)
       
        //Следниот код добива грешка
        // cy.get('#random-number') // <span> 🎁 </span>
        // .invoke('text') // "🎁"
        // .then(parseFloat) // NaN
        // .should('be.gte', 1) // fails
        // .and('be.lte', 10) // never evaluates

        cy.get('#random-number').should(($span) => {
            // all the code inside here will retry
            // until it passes or times out
            const n = parseFloat($span.text())
            expect(n).to.be.gte(1).and.be.lte(10)
            //cy.get('#random-number').should('',0)

          })
    })

    it("Verify number of clicks",()=>{
        cy.visit('./countClicks.html') 
        cy.get('#demo').then(($span) => {
            // capture what num is right now
            const num1 = $span.text()
            cy.log('num1 == '+num1)
            cy.get('button')
              .click()
              .then(() => {
                // now capture it again
                const num2 = parseFloat($span.text())
          
                // make sure it's what we expected
                expect(num2).to.eq(num1 + 1)
              })
        })
          
    })
})