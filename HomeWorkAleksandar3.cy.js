describe("rahulshettyacademy.com/seleniumPractise",()=>{
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
    });
    it("Verify that the correct count of total products is listed in the search result page",()=>{
        cy.get("input[placeholder='Search for Vegetables and Fruits']").type("ca");
        cy.get("button[type='submit']").click();

        cy.get(".products>.product").should("have.length",4)
        cy.get(".product-image+.product-name").should("include.text","Ca");
    })
    it("Verify valid checkout",()=>{
        cy.get('div:nth-child(10)>*>[type="button"]').click();
        cy.get("img[alt='Cart']").click();
        cy.get("div[class='cart-preview active']>*>button[type='button']").click();
        cy.get("div.promoWrapper ~ button").click();
        cy.get("div.wrapperTwo > div >select")
        .select("Macedonia");
        cy.get("[type='checkbox']").check();
        cy.get("div[class='wrapperTwo'] > button").click();
        cy.get('.wrapperTwo').should("contain.text", "Thank you, your order has been placed successfully ")
    })
   
})