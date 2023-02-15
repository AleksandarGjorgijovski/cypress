///<reference types='cypress'/>

describe('Calendar App', () => {
    it("Calendar simple sample Inline Datepicker",()=>{
        cy.visit('https://demos.jquerymobile.com/1.4.5/datepicker/')
        let found=false
        for (let index = 0; index < 20 && !found; index++) {
            cy.get('.ui-datepicker-title').then($calendarPopover => {
                const monthYear = $calendarPopover.children().text().trim()
                cy.get('.ui-datepicker-next')
                    .then(el => {
                        //find April 2023
                        if(monthYear.includes('March2024'))
                        {
                            found = true
                        }
                        else {
                            cy.wrap(el).click()
                        }
                })
            })
        }
        //select 4th day from the month
        cy.get('a.ui-state-default.ui-btn').eq(22).click()
        cy.get('#InlineDatepicker~div>div>input').should('have.value','03/23/2024')

    })

    it("Calendar recursive for Inline Datepicker",()=>{
        const clickVisibleButton = () => {
            cy.get('.ui-datepicker-title').then( $mainContainer => {
                const monthYear = $mainContainer.children().text().trim()
                cy.log("monthYear:"+monthYear)
                //find April 2024
                if ( !(monthYear==='April2024')) {
                    cy.get('.ui-datepicker-next').click()
                    clickVisibleButton();    
                }
            });
        }
        cy.visit('https://demos.jquerymobile.com/1.4.5/datepicker/')
        clickVisibleButton()
        //select 4th day from the month
        cy.get('a.ui-state-default.ui-btn').eq(3).click()
        cy.get('a.ui-state-default.ui-btn').eq(3).should(($el)=>{
            expect($el).to.have.class('ui-btn-active')
        })
        cy.get('#InlineDatepicker~div>div>input').should('have.value','04/04/2024')

    })

    it("Calendar Popup Datepicker",()=>{
        const clickVisibleButton = ($el) => {
            cy.get($el).find('.ui-datepicker-title').then( $mainContainer => {
           // cy.get('#ui-datepicker-div>div>.ui-datepicker-title').then( $mainContainer => {
                const monthYear = $mainContainer.children().text().trim()
                cy.log("monthYear:"+monthYear)
                //find April 2024
                if ( !(monthYear.includes('April2024'))) {
                    cy.get('.ui-datepicker-next').click()
                    clickVisibleButton($el);    
                }
            });
        }
        cy.visit('https://demos.jquerymobile.com/1.4.5/datepicker/')
        cy.get('input.hasDatepicker').click()
        cy.get('#ui-datepicker-div').should('be.visible')
        cy.get('#ui-datepicker-div').should('have.css', 'display', 'block')
        cy.get('#ui-datepicker-div').within(($el)=>{
            clickVisibleButton($el)
            cy.get('a.ui-state-default.ui-btn').eq(3).click({force: true})
            cy.get($el).should('have.css', 'display', 'none')
        })
        cy.get('#PopupDatepicker~div>div>input.hasDatepicker').should('have.value','04/04/2024')
    })

    // Za domashno
    it("Calendar combination of both cases",()=>{
        const clickVisibleButton = ($el) => {
            cy.get($el).find('.ui-datepicker-title').then( $mainContainer => {
                const monthYear = $mainContainer.children().text().trim()
                cy.log("monthYear:"+monthYear)
                //find April 2024
                if ( !(monthYear.includes('April2024'))) {
                    cy.get('.ui-datepicker-next').click()
                    clickVisibleButton($el);    
                }
            });
        }
        cy.visit('https://demos.jquerymobile.com/1.4.5/datepicker/')
        cy.get('input.hasDatepicker').click()
        cy.get('#ui-datepicker-div').should('be.visible')
        cy.get('#ui-datepicker-div').should('have.css', 'display', 'block')
        cy.get('#ui-datepicker-div').within(($el)=>{
            clickVisibleButton($el)
            // Select 4th day of the month
            cy.get('a.ui-state-default.ui-btn').eq(3).click({force: true})
            cy.get($el).should('have.css', 'display', 'none')
        })
        cy.get('#PopupDatepicker~div>div>input.hasDatepicker').should('have.value','04/04/2024')

        cy.get('.ui-datepicker-inline').within(($el)=>{
            clickVisibleButton($el)
            // Select 6th day of the month
            cy.get('a.ui-state-default.ui-btn').eq(5).click({force: true})
            cy.get('a.ui-state-default.ui-btn').eq(5).should(($el1)=>{
                expect($el1).to.have.class('ui-btn-active')
            })

        })
        cy.get('#InlineDatepicker~div>div>input').should('have.value','04/06/2024')
    })
})