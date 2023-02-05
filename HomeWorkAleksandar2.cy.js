describe('Home Work 2 Aleksandar', () => {
    it('Navigate rahulshettyacademy and populate required fields', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get("div[class='form-group'] input[name='name']").type("Aleksandar");
        cy.get("input[name='email']").type("ace@hotmail.com");
        cy.get("#exampleInputPassword1").type("demo123");
        cy.get("#exampleCheck1").check().should('be.checked');
        //Gender with assertion
        cy.get('#exampleFormControlSelect1').select("Male").should("have.value", "Male")
        //Employment Status with assertion
        cy.get("#inlineRadio1").check().should("be.checked");

        cy.get("input[name='bday']").type("1990-08-13");
        cy.get("[value='Submit']").click();

        //assertions
        //Sucess!
        cy.get(".alert.alert-success.alert-dismissible").should("contain.text", "Success! The Form has been submitted successfully!.");
        //name
        cy.get("div[class='form-group'] input[name='name']").should("have.value", "Aleksandar")
        cy.get("input[name='name']+.alert.alert-danger").should("not.exist");
        //email 
        cy.get("input[name='email']+.alert.alert-danger").should("not.exist");
        cy.get("input[name='email']").should("have.value", "ace@hotmail.com")
        //password
        cy.get('#exampleInputPassword1').each($password => {
        cy.wrap($password)
          .invoke('val')
          .should('not.be.empty') 
         })
         //date
         cy.get("input[name='bday']").should("have.value","1990-08-13");
        });

        it('Invalid login', ()=>{
            cy.visit('https://demo.nopcommerce.com/')
            cy.get('a.ico-login').click();
            cy.get('input#Email').type('invaliduser@hotmail.com')
            cy.get('input#Password').type('demo123')
            cy.get('button.button-1.login-button').click();
            
            cy.title().should('eq','nopCommerce demo store. Login')
          })
});
//running with command line 
//npx cypress run --spec cypress/e2e/HomeWorkAleksandar2.cy.js --browser chrome --headless 