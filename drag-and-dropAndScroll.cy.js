//npm install --save-dev @4tw/cypress-drag-drop
require ("@4tw/cypress-drag-drop")

describe('Mouse action', () => {
    it('drag-and-drop', () => {
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box6").drag("#box106")
    });
    it.only("scrolling page",()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        cy.get(':nth-child(2) > tbody > :nth-child(30) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(2) > tbody > :nth-child(30) > :nth-child(1) > img').should("be.visible");
        cy.get(':nth-child(2) > tbody > :nth-child(50) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(2) > tbody > :nth-child(50) > :nth-child(1) > img').should("be.visible");
        cy.get("#footer").scrollIntoView({duration:2000})
    })
});