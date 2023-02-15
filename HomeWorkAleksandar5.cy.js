describe("Home_Work_5 Aleksandar", () => {

    it('Calendar - pick date -Inline Datepicker', () => {
        const pickDate = () => {
            cy.get(".ui-datepicker-title").then($monthContainer => {
                const monthYear = $monthContainer.children().text().trim();
                //find August 2021
                if (!(monthYear === "August2021")) {
                    cy.get(".ui-datepicker-prev").click();
                    pickDate();
                }
            })
        }
        cy.visit("https://demos.jquerymobile.com/1.4.5/datepicker/");
        pickDate();
        //select 13th day of the month
        cy.get("a.ui-state-default.ui-btn").eq(12).click();
        cy.get("a.ui-state-default.ui-btn").eq(12).should(($el) => {
            expect($el).to.have.class("ui-btn-active")
        })
        cy.get("#InlineDatepicker~div>div>input").should("have.value", "08/13/2021")

    });
    it('NopeCommerce calendar', () => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.viewport(1024, 768)
        cy.get("ul[class='top-menu notmobile'] li:nth-child(6) a:nth-child(1)").click();
        cy.get("img[title='Show details for Elegant Gemstone Necklace (rental)']").click();
        cy.get("#rental_start_date_40").click();

        const pickStartDate = () => {
            cy.get(".ui-datepicker-title").then($monthStartContainer => {
                const startMonthYear = $monthStartContainer.children().text().trim();
                if (!(startMonthYear === "March2023")) {
                    cy.get("a[title='Next']").click();
                    pickStartDate();
                }
            })
        }
        pickStartDate();
        cy.get(".ui-state-default").eq(7).click();
        cy.get("#rental_start_date_40").click();
        cy.get(".ui-state-default").eq(7).should(($el) => {
            expect($el).to.have.class("ui-state-active")
        })

        cy.get("#rental_start_date_40").should("have.value", "3/8/2023");

        cy.get("#rental_end_date_40").click();
        const pickEndDate = () => {
            cy.get(".ui-datepicker-title").then($monthEndContainer => {
                const endMonthYear = $monthEndContainer.children().text().trim();
                if (!(endMonthYear === "April2023")) {
                    cy.get("a[title='Next']").click();
                    pickEndDate();
                }
            })
        }
        pickEndDate();
        cy.get(".ui-state-default").eq(2).click();
        cy.get("#rental_end_date_40").click();
        cy.get(".ui-state-default").eq(2).should(($el) => {
            expect($el).to.have.class("ui-state-active")
        })
        cy.get("#rental_end_date_40").should("have.value", "4/3/2023")

    });
    it("Click 15 times", () => {
        cy.visit('cypress\\e2e\\Third Class\\countClicks.html')
        cy.get('#demo').then(($span) => {
            // capture what num is right now
            const num1 = $span.text()
            cy.log('num1 == ' + num1)
            for (let index = 0; index < 15; index++) {
                cy.get('button')
                    .click()
            }
            cy.get('#demo').then(() => {
                // now capture it again
                const num2 = parseFloat($span.text())

                // make sure it's what we expected
                expect(num2).to.eq(15)
            })
        })

    })
    it('Web Table Examle', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get(".table-display>tbody>tr").each(($cell, index, $cells) => {
            const tableContent = $cell.text()
            cy.wrap($cell).within(() => {
                if (tableContent.includes("Python")) {
                    cy.get("td:nth-child(3)").should("have.text", "25")
                }
            })
        })
    })
});

