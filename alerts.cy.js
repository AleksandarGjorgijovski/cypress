describe('JS Alerts',()=>{
    it.skip('',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
            
        })
        cy.get("p#result").should("have.text", "You successfully clicked an alert");
    })
    it.skip('JS Confirm -OK', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
            
        })
        cy.get("p#result").should("have.text", "You clicked: Ok");
    })
    it.skip('JS confirm - cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm',()=>false);
        cy.get("p#result").should("have.text", "You clicked: Cancel");
        
    });
    it.skip('JS Prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click();
        
        
        cy.get("#result").should("have.text","You entered: welcome");
    });
    it('Authenticated alert', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:
                                                                            {
                                                                         username: "admin", 
                                                                         password: "admin"
                                                                        }});
        cy.get("div[class='example'] p").should("have.contain","Congratulations")
    });
})  