describe('Returning Values', () => {
    it('Returning values', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > label').then($name=>{
            const textName = $name.text()
            cy.get("div[class='form-group'] input[name='name']").type(textName)
        })
        cy.get('.ng-invalid.ng-dirty > :nth-child(2) > label').then($email=>{
               const textEmail = $email.text()
               cy.get("input[name='email']").type(textEmail)
            })
        cy.get("label[for='exampleInputPassword1']").then($password=>{
            const textPassword = $password.text()
            cy.get("#exampleInputPassword1").type(textPassword)
        }) 
        cy.get("[value='Submit']").click();
        cy.get('[href="/angularpractice/shop"]').click();
        cy.get(':nth-child(1) > .card > .card-footer > .btn').click();
        cy.get(".nav-link.btn.btn-primary").click();
        cy.get("button[class='btn btn-success']").click();
        cy.get("#country").type("Macedonia");
        cy.get("label[for='checkbox2']").click();
        cy.get("input[value='Purchase']").click();
        cy.get(".alert.alert-success.alert-dismissible").should("contain.text"," Thank you! Your order will be delivered in next few weeks :-).");


    });
});