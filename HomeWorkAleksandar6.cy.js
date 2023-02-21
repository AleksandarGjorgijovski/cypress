describe('API Testing', () => {
    it.only('rahulshettyacademy api login1', () => {
        cy.visit('https://rahulshettyacademy.com/client');
    
           cy.request({
               method: "POST",
               url: "https://rahulshettyacademy.com/client",
               form: true,
               followRedirect:true,
               body: {
                   "Email": "a1@a.com",
                   "userPassword": "Demo1234569",
                                     
                     }
             }).then((response)=>{
            expect(response.body.message).to.eq("Login Successfully")
           })
          
       
    it('rahulshettyacademy api login', () => {
         cy.visit('https://rahulshettyacademy.com/client');
      
        cy.request({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/client', // baseUrl is prepend to URL
          
        }).then(($response) => {
            
            cy.log($response)
            cy.log($response.body)
            cy.log($response.duration)
            cy.request({
                method: "POST",
                url: "https://rahulshettyacademy.com/client",
                form: true,
                followRedirect:true,
                body: {
                    "Email": "a1@a.com",
                    "userPassword": "Demo1234569",
                                      
                      }
              })
            .then((response)=>{
                  
                  expect(response.body.message).to.eq("Login Successfully")
            })
            console.log(Response.message)
            console.log($response.body);
        })
        
    })    
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
        
    }) 
})
