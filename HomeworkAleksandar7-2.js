/// <reference types="cypress" />
const isLocalHost = () => Cypress.config("baseUrl").includes("localhost")

if(isLocalHost()){
  beforeEach(function resetData() {
    cy.request("POST","/reset",{
      todos:[]
    })
  });
}
beforeEach(function visitSite() {
  cy.log("Visiting",Cypress.config("baseUrl"))
  cy.visit("/")
});
it('loads', () => {
  // application should be running at port 3000
  cy.visit('localhost:3000')
  cy.contains('h1', 'todos')
})

// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// remember to manually delete all items before running the test
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

it('adds two items', () => {
  cy.get('.new-todo')
  .type("Aleksandar{enter}")
  .type("Write homework{enter}")
  cy.get(".todo-list li").should("have.length",2)
  // repeat twice
  //    get the input field
  //    type text and "enter"
  //    assert that the new Todo item
  //    has been added added to the list
  // cy.get(...).should('have.length', 2)
})

it('can mark an item as completed', () => {
  // adds a few items
  // cy.get('.new-todo')
  // .type("Milk{enter}")
  // .type("Bananas{enter}")
  // .type("Meat{enter}")
  // .type("Potatoes{enter}")
  // confirms the first item has the expected completed class
  cy.request("POST", "/todos",{title:"milk", completed:false})
  cy.request("POST", "/todos",{title:"bananas", completed:false})
  cy.request("POST", "/todos",{title:"meat", completed:false})
  cy.request("POST", "/todos",{title:"potatoes", completed:false})
  
  cy.visit("/");
  cy.get(".todo-list li:first-child").find(".toggle").should("not.be.checked").click();
  // marks the first item as completed
cy.contains(".todo-list li","milk").should("have.class","completed")
// confirms the other items are still incomplete
cy.contains(".todo-list li","bananas").should("not.have.class","completed")
cy.contains(".todo-list li","meat").should("not.have.class","completed")
cy.contains(".todo-list li","potatoes").should("not.have.class","completed")

})
//
it('can delete an item', () => {
  // adds a few items
  cy.get('.new-todo')
  .type("Milk{enter}")
  .type("Bananas{enter}")
  .type("Meat{enter}")
  .type("Potatoes{enter}")

  // deletes the first item
  cy.get(".todo-list li:first-child").find(".destroy").click({force:true})
  // use force: true because we don't want to hover
  // confirm the deleted item is gone from the dom
  cy.contains(".todo-list li","milk").should("not.exist")
  // confirm the other item still exists
  cy.contains(".todo-list li","Bananas").should("exist")
  cy.contains(".todo-list li","Meat").should("exist")
  cy.contains(".todo-list li","Potatoes").should("exist")

  
})

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    // add an item
    cy.get('.new-todo')
  .type("Milk{enter}")
    // probably want to have a reusable function to add an item!
  }
  // check number of items
})

it('adds item with random text', () => {
  // use a helper function with Math.random()
  // or Cypress._.random() to generate unique text label
  // add such item
  // and make sure it is visible and does not have class "completed"
})

it('starts with zero items', () => {
  // check if the list is empty initially
  //   find the selector for the individual TODO items
  //   in the list
  //   use cy.get(...) and it should have length of 0
  //   https://on.cypress.io/get
})

it('does not allow adding blank todos', () => {
  // https://on.cypress.io/catalog-of-events#App-Events
  cy.on('uncaught:exception', () => {
    // check e.message to match expected error text
    // return false if you want to ignore the error
  })

  // try adding an item with just spaces
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
