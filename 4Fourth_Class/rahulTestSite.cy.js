///<reference types="Cypress"/>

describe("Rahuls Selenium site practice",()=>{
    it("Get all products with \"ca\"",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')

        //there is one invisible product
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //Verify the console if all products are found
        console.log('Verify the console for above command if all 4 products are found')
        
        //parent - child
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).should('contain','Capsicum')
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        
        // Razgledajte go primerot - ke go objasnam na sledniot cas
        // iterate through an array -> products $el,index,$list
        cy.get('.products').find('.product').each(($product,index,$products)=>{
            const product_text = $product.find('h4.product-name').text()
            if(product_text.includes('Cashews'))   // or Cauliflower
            {
                //click() is deprecated using on find method because the $el ($product) is a promise and will not trigger until resolve
                //wrap() will resolve the promise
                //$product.find('button').click()
                cy.wrap($product).find('button').click()
            }
        })
    })

    it("Get brand logo",()=>{
        // cypress does not support declaration example const
        //const logo=cy.get('.brand')  //=> will not work
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.brand').then(function(logo){
            cy.log(logo.text())
        })
        //assert if txt logo is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
        //use of aliasing
        cy.get('.products').as('productsloc')
        console.log('this is not reselved and will be printed immidiatlly')
        cy.get('@productsloc').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('resolved log in then after ADD TO CART click')
        })
        
    })

    it("e2e test",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        // clcik the second product
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })

    it("use of then()",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy
        // Find the el with id 'some-link'
        .get('[href="#/offers"]')
        .then(($myElement) => {
            // ...massage the subject with some arbitrary code
            // for example
            // grab its href property
            const href = $myElement.prop('href')
            // strip out the 'hash' character and everything after it
            return href.replace(/(#.*)/, '')
        })
        .then(($href) => {
            // href is now the new subject
            // which we can work with now
            cy.log($href)
        })
    })

})