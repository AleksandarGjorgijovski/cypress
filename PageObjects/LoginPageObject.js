class LoginPageObject{
    loginValid(email, password){
        cy.get("#Email").type(email);
        cy.get("#Password").type(password);
        cy.get(".button-1.login-button").click();
    }
}
export default LoginPageObject;