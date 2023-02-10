describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1024, 768)

  });
  it.only('verify products - positive test',() => {
    cy.visit('https://demo.nopcommerce.com/digital-downloads')

    cy.get("div.product-item").should('have.length',3)
   
})

it('verify register - positive test',() => {
  cy.visit('https://demo.nopcommerce.com/')

  cy.get("a.ico-register").click();
  cy.get('input#FirstName').type('Aleksandar');
  cy.get('input#LastName').type('Gjorgijovski');
  cy.get('input#Email').type('aleksandar2@hotmail.com')
  cy.get('input#Password').type('demo123');
  cy.get('input#ConfirmPassword').type('demo123');
  cy.get('button#register-button').click();
  cy.get('a.button-1.register-continue-button').click();
  cy.get('a.ico-login').click();
  cy.get('input#Email').type('aleksandar2@hotmail.com');
  cy.get('input#Password').type('demo123');
  cy.get('button.button-1.login-button').click();
  
  cy.get('a.ico-account').should('be.visible')
  .and('exist')
 
})
it('Valid login',()=>{
  cy.visit('https://demo.nopcommerce.com/')
  cy.get('a.ico-login').click();
  cy.get('input#Email').type('aleksandar2@hotmail.com');
  cy.get('input#Password').type('demo123');
  cy.get('button.button-1.login-button').click();
  
  //cy.get('a.ico-account').should('exist');
  cy.get('a.ico-account').should('have.text','My account')
})
it('Invalid login', ()=>{
  cy.visit('https://demo.nopcommerce.com/')
  cy.get('a.ico-login').click();
  cy.get('input#Email').type('invaliduser@hotmail.com')
  cy.get('input#Password').type('demo123')
  cy.get('button.button-1.login-button').click();
  
  cy.title().should('eq','nopCommerce demo store. Login')
})

it.only('PDP insert to shopping cart', () => {
  cy.viewport(1024, 768)
  cy.visit('https://demo.nopcommerce.com/computers');
  cy.get('div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-2 div.page.category-page div.page-body div.category-grid.sub-category-grid div.item-grid div.item-box:nth-child(1) div.sub-category-item h2.title > a:nth-child(1)').click();
  cy.get('div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-2 div.page.category-page div.page-body div.products-container div.products-wrapper div.product-grid div.item-grid div.item-box:nth-child(1) div.product-item div.details div.add-info div.buttons > button.button-2.product-box-add-to-cart-button:nth-child(1)').click();
  cy.get('select#product_attribute_1').select('1');
  cy.get


  });

})


