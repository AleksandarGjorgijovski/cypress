/// <reference types="Cypress"/>

describe("Fulfill the form on Home Page",()=>{
beforeEach("before block",()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get(':nth-child(1) > .form-control').as('form')

})
    it.only("Fulfill the form on HomePage",()=>{
        cy.get('@form').should('have.attr','minlength','2');
        cy.get(':nth-child(1) > .form-control').should('have.attr','required');
        cy.get(':nth-child(1) > .form-control').type('m')
        cy.get('input[name="email"]:nth-child(2)').click()
        // .then(function() {
        //     expect('.alert').to.contain('Name should be at least 2 characters')
        // });
        cy.get('.alert').should('have.text','Name should be at least 2 characters')
        cy.get(':nth-child(1) > .form-control').clear('m');
        cy.get(':nth-child(1) > .form-control').type('Marija');
        cy.get(':nth-child(2) > .form-control').type('sample@email.com');
        cy.get('#exampleFormControlSelect1').select('Female');
        cy.get('.ng-untouched').should('have.value','Marija')
        cy.get(':nth-child(2) > .form-control').should('have.attr','required');
        cy.get('#inlineRadio3').should('be.disabled');
        cy.get('#inlineRadio2').check();
        cy.get(':nth-child(8) > input.form-control').type("2023-01-01");
        cy.get(':nth-child(8) > input.form-control').should('have.value', '2023-01-01');
        cy.get('#exampleInputPassword1').type('password',{ sensitive: true });
        cy.get('form.ng-dirty > :nth-child(4) > .form-check-label').click();
        cy.get('#exampleCheck1').check();
        cy.get('#exampleCheck1').should('be.checked')
        cy.get('.btn').click();
        cy.get('.alert').should('be.visible').and('have.text','\n×\n  Success! The Form has been submitted successfully!.\n                  ')
        cy.get('.alert').should('be.visible').and('contain','Success! The Form has been submitted successfully!.')
    })

    it("Recorded flow with Cypress Studio",()=>{

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .form-control').clear('Marij');
        cy.get('#exampleInputPassword1').click();
        cy.get('.alert').should('have.text', 'Name is required');
        cy.get(':nth-child(1) > .form-control').clear('m');
        cy.get(':nth-child(1) > .form-control').type('m');
        cy.get('.alert').should('have.text', 'Name should be at least 2 characters');
        cy.get(':nth-child(1) > .form-control').clear('m');
        cy.get(':nth-child(1) > .form-control').type('Marija');
        cy.get('.alert').should('not.exist');
        cy.get(':nth-child(2) > .form-control').type('some');
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get('#exampleInputPassword1').click();
        cy.get('.alert').should('have.text', 'Email is required');
        cy.get(':nth-child(2) > .form-control').type('sample@mail.com');
        cy.get('.alert').should('not.exist');
        cy.get('#exampleInputPassword1').clear('p');
        cy.get('#exampleInputPassword1').type('pass');
        cy.get('#exampleCheck1').check();
        cy.get('#exampleFormControlSelect1').select('Female');
        cy.get('#inlineRadio2').check();
        cy.get(':nth-child(8) > .form-control').clear('0001-08-21');
        cy.get(':nth-child(8) > .form-control').type('1987-08-21');
        cy.get('.ng-pristine').should('be.visible');
        cy.get('.ng-pristine').should('have.value', 'Marija');
        cy.get('.btn').click();
        cy.get('strong').should('have.text', 'Success!');
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('new studio test', function() {
        /* ==== Generated with Cypress Studio ==== */
        
        // cy.get(':nth-child(1) > .form-control').clear('Verica');
        // cy.get(':nth-child(1) > .form-control').type('Verica');
        // cy.get(':nth-child(2) > .form-control').clear('sample@email.com');
        // cy.get(':nth-child(2) > .form-control').type('sample@email.com');
        // cy.get('#exampleInputPassword1').clear('p');
        // cy.get('#exampleInputPassword1').type('proba');
        // cy.get('form.ng-dirty > :nth-child(6)').click();
        // cy.get('#exampleCheck1').check();
        // cy.get('#exampleFormControlSelect1').select('Female');
        // cy.get('#inlineRadio1').check();
        // cy.get(':nth-child(8) > .form-control').click();
        // cy.get('form.ng-dirty > :nth-child(8)').click();
        // cy.get(':nth-child(1) > .form-control').should('have.value', 'Verica');
        // cy.get(':nth-child(1) > .form-control').should('have.class', 'form-control');
        // cy.get('#exampleInputPassword1').should('have.value', 'proba');
        // cy.get('#exampleCheck1').should('be.checked');
        cy.get('.ng-invalid>div:nth-child(7)').find('div').eq(1).should((list)=>{
            console.log(list)
        })
        /* ==== End Cypress Studio ==== */
    });
})