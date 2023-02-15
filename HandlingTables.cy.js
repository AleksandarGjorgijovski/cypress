describe('', () => {
    beforeEach("login",() => {
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();

        cy.get(".parent.collapsed[href='#collapse-5']").click();
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();
    });
    it.only('Check Number Rows & Coumns', () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr").should("have.length","10");
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should("have.length","7");
        
    });
    it('Check cell data from sepcific row & column', () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("princytrainings4@gmail.com");
    });
    it('Read all the rows & columns data in the first page', () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    });
    it('Pagination', () => {
        
    });
});