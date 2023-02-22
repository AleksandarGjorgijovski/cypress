describe('Homework_Aleksandar7', () => {
    it('', () => {
        cy.request({
            method: 'POST',
            url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
            body: { "userEmail": "test.user@mailinator.com", "userPassword": "12Freedom12#" }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Login Successfully")
        })
});
it('demoqa api login', () => {
    cy.visit('https://shop.demoqa.com/my-account/');
 
   cy.request({
       method: 'GET',
       url: 'https://shop.demoqa.com/my-account/', // baseUrl is prepend to URL
     
   }).then(($response) => {
       cy.log($response)
       cy.log($response.body)
       cy.log($response.duration)
       cy.request({
           method: "POST",
           url: "https://shop.demoqa.com/my-account/",
           form: true,
           followRedirect:true,
           body: {
               "Email": "ace@mailinator.com",
               "userPassword": "Demo1234569",
               "woocommerce-login-nonce":"2d9a667fb4",
               "_wp_http_referer": "/my-account/"
                                 
                 }
                })
                

   })
})


});