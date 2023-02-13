class RegisterPageObject{
    registerValidMandatory(fristName, lastName, email, password, confrimPassword ){
        cy.get("#FirstName").type(fristName);
        cy.get("#LastName").type(lastName);
        cy.get("#Email").type(email);
        cy.get("#Password").type(password);
        cy.get("#ConfirmPassword").type(confrimPassword);
        cy.get("#register-button").click();
        cy.get(".button-1.register-continue-button").click();
    }
}
export default RegisterPageObject