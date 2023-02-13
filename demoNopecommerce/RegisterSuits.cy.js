import HomePageObject from "../../PageObjects/HomePageObject";
import RegisterPageObject from "../../PageObjects/RegisterPageObject";
import example from '../fixtures/example.json'
const homePage = new HomePageObject();
const registerPage = new RegisterPageObject();
const example = new example();

describe('Register Suits', () => {
    before(() => {
        cy.fixture().then(function (TestData) {
            this.TestData=TestData;
            
        })
    });
    beforeEach(() => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.viewport(1024, 768)
    });
    it('register valid', () => {
        homePage.registerLink();
        registerPage.registerValidMandatory("Aleksandar","Gjorgijovski", "ace@ace.com", "demo123", "demo123");
    });
});