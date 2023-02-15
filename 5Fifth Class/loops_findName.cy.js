/// <reference types="cypress" />

describe('loops find name in table', () => {
	it('Find person in table with pagination', () => {
		cy.visit('https://mdbootstrap.com/docs/jquery/tables/pagination/');
		findPerson('Quinn Flynn');
	});
});

const findPerson = (name) => {
	const findInPage = (index) => {
		let found = false;
        cy.get('.datatable-pagination-right').first().then((element)=>{ 
            cy.get('.datatable-table:nth-child(1)').first().find('td:nth-child(1)').each((td,index1,list)=>{
                const tdtext=td.text()
                console.log(tdtext)
                if(tdtext===name)
                {
                    console.log("The name "+name+" is found and equal to "+tdtext)
                    found=true
                    return false
                }
            }).then(() => {
                if(!(element.attr('disabled'))&&!found){
                    cy.get('.datatable-pagination-right').first().click({force: true})
                    findInPage(++index)
                }
            });            
      })
  	};
	findInPage(0);
};