import HomePageObject from "../../PageObjects/HomePageObject";
import LoginPageObject from "../../PageObjects/LoginPageObject";
const homePage = new HomePageObject();
const loginPage = new LoginPageObject();


describe('Login Suit', () => {
    beforeEach(() => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.viewport(1024, 768)
    });
    it('Login Valid', () => {
        homePage.loginLink();
        loginPage.loginValid("aleksandar@hotmail.com", "demo123");
    });
});