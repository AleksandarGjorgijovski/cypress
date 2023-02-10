describe('Custom commands ', () => {
    it('Select Product with commands', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get('[href="/angularpractice/shop"]').click();
        cy.selectProduct("Blackberry");
        cy.get(".nav-link.btn.btn-primary").click();
        cy.get("h4.media-heading ").should("have.text","Blackberry");

    });
    
    it('Select product with fixtures fat arrow', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get('[href="/angularpractice/shop"]').click();
        cy.fixture('example').then((data) => {
          const productName = data.products[1]
          cy.selectProduct(productName)
        })
        cy.get(".nav-link.btn.btn-primary").click();
        cy.get("h4.media-heading ").should("have.text","Nokia Edge");
      })
      it('Select product with fixtures Function', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get('[href="/angularpractice/shop"]').click();
        cy.fixture('example').then(function(data) {
            this.data = data;
          cy.selectProduct(this.data.item);
        })
        cy.get(".nav-link.btn.btn-primary").click();
        cy.get("h4.media-heading ").should("have.text","Samsung Note 8");
      })
      it.only('Select product with fixtures ALIAS', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get('[href="/angularpractice/shop"]').click();
        cy.fixture("example").as("TestData")
        cy.get('@TestData').then((data)=> {
          cy.selectProduct(data.phoneModel);
        })
        cy.get(".nav-link.btn.btn-primary").click();
        cy.get("h4.media-heading ").should("have.text","iphone X");
      })
});