/// <reference types="cypress"/>
describe("Use of then()",()=>{
    it.only("use of then()",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy
        // Find the el with id 'some-link'
        .get('[href="#/offers"]')
        .then(($myElement) => {
            // ...massage the subject with some arbitrary code
            // for example
            // grab its href property
            const href = $myElement.prop('href')
            // strip out the 'hash' character and everything after it
            debugger
            return href.replace(/(#.*)/, '')
        })
        .then(($href) => {
            debugger
            // href is now the new subject
            // which we can work with now
            cy.log($href)
        })
    })

    it('passes', () => {
        cy.visit('https://example.cypress.io');
        cy.contains("contains")
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1) > ul').children().should('have.length', 4)
        // .should(($lis) => {
        //     expect($lis).to.have.length(3)
        //     expect($lis.eq(0)).to.contain('get')
        //   })
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1) > ul')
        .children()
        .then(($lis)=>{
            debugger
            cy.get($lis.eq(1)).click();
        })
    })
})