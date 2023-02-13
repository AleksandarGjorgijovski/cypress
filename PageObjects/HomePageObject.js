class HomePageObject{
    loginLink(){
        return cy.get(".ico-login").click();
    }

    registerLink(){
        return cy.get(".ico-register").click();
    }
    wishlistLink(){
        return cy.get(".wishlist-label").click();
    }
    shoppingCartLink(){
        return cy.get(".cart-label").click();
    }
    searchField(){
        return cy.get("#small-searchterms").click();
    }
    searchBtn(){
        return cy.get("button[type='submit']").click();
    }

}
export default HomePageObject;