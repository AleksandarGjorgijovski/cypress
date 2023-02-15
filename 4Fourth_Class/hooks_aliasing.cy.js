/// <reference types="Cypress"/>
describe('parent', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //cy.get('one').as('a')
        cy.get('[href="https://rahulshettyacademy.com/documents-request"]').then(($a_link)=>{
            const a_href=$a_link.attr('href')
            return a_href
        })
        .as('a')
    })
  
    context('child', () => {
        beforeEach(() => {
            //cy.get('two').as('b')
            cy.get('[href="#/offers"]').then(($b_link)=>{
                const b_href=$b_link.attr('href')
                return b_href
            })
            .as('b')
        })
    
        describe('grandchild', () => {
            beforeEach(() => {
                //cy.get('three').as('c')
                cy.get('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').then(($c_link)=>{
                    const c_href=$c_link.attr('href')
                    return c_href
                })
                .as('c')
            })
    
            it('can access all aliases as properties', function () {
                expect(this.a).to.eq('https://rahulshettyacademy.com/documents-request') // true
                // или  @a
                //cy.get('@a').should('contain','documents-request')

                expect(this.b).to.eq('#/offers') // true
                // или  @b
                //cy.get('@b').should('contain','offers')

                expect(this.c).to.eq('https://rahulshettyacademy.com/dropdownsPractise/') // true
                // или  @c
                //cy.get('@c').should('contain','dropdownsPractise')
            })
        })
    })
    // it.only('is not using aliases correctly', function () {
        
    //     cy.get('h4.product-name').each(($product)=>{
    //         const product_name = $product.text()
    //         cy.log(product_name)
    //     })
    //     //cy.get('.product-name').as('products')
    //     // nope this won't work
    //     //
    //     // this.users is not defined
    //     // because the 'as' command has only
    //     // been enqueued - it has not run yet

    //     //const product = this.product[0]
    // })  
})
  