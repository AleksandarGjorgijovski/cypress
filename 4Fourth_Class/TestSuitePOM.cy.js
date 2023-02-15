/// <reference types="Cypress"/>

// import HomePage from "../../PageObjects/HomePage";

describe("POMTestSuite",()=>{

    beforeEach(function() {
        cy.fixture('example').as('dataSample')
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example').then((data)=> {
                this.data=data;
        })
    })

    // Zabeleshka: za da se koristi "this" clbFn mora da bide definirana so long name = function(){}
    //Dokolku se koristi skraten zapis za fn ()=>{} "this" nema da raboti
    it("Fulfill the form on HomePage",{retries: {runMode: 2, openMode: 2,}},function(){
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2');
        cy.get(':nth-child(1) > .form-control').should('have.attr','required');

        //Sledniot nacin na koristenje na fixtures datata e so @dataSample nomenklaturata

        cy.get('@dataSample').then((data)=>{
            cy.get(':nth-child(1) > .form-control').type(data.name)
            cy.get(':nth-child(2) > .form-control').type(data.email);
            cy.get('#exampleFormControlSelect1').select(data.gender);
            cy.get('.ng-untouched').should('have.value', data.name)
        })

        //Za da go koristite this.data=data; ili vtoriot nacin na koristenje data od fixtures
        // koristete ja slednava sintaksa (37-40)

        cy.get(':nth-child(2) > .form-control').should('have.attr','required');
        cy.get('#inlineRadio3').should('be.disabled');
        cy.get('#inlineRadio2').check();
        cy.get(':nth-child(8) > input.form-control').type("2023-01-01");
        cy.get(':nth-child(8) > input.form-control').should('have.value', '2023-01-01');
        cy.get('#exampleInputPassword1').type('password',{ sensitive: true });
        cy.get('form.ng-dirty > :nth-child(4) > .form-check-label').click();
        cy.get('#exampleCheck1').check();
        cy.get('#exampleCheck1').should('be.checked')
        cy.get('.btn').click();
        cy.get('.alert').should('be.visible').and('contain','Success! The Form has been submitted successfully!.')
    

    })

    it.only("Shop Test Case",function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()

        // //Definirajte custom command "selectProduct"
         cy.selectProduct1('Blackberry');
        
        // //probajte ja so drug product na primer Nokia Edge:
        // cy.selectProduct1('Nokia Edge')

        //iskoristete ja pogornata komanda so citanje na fixtures 
        //mozite da definirate product element na primer "iphone X" or "Samsung Note 8" vo example.json)
       
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').should('have.text',' Checkout ( 1 )\n            (current)\n          ')
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get(':nth-child(1) > .col-sm-8 > .media > .media-body > h4.media-heading > a').should('be.visible');
        
		//Можете да ја измените асерцијата да го содржи избраниот продукт
		//cy.get(':nth-child(1) > .col-sm-8 > .media > .media-body > h4.media-heading > a').should('have.text', 'Blackberry');
		
        //Kalkulirajte total bidejki sleden cas ke napravime selekcija na poveke produkti pa ke go reiskoristime ovoj kod
		
        var total=0;

        cy.get('tbody > tr > td:nth-child(4) > strong').then(($tr)=>{ //za pojke samo elementi each
            var price=Number(($tr.text().replace('₹. ','')))
            cy.log(" price : "+price)
            total+=price; 
            //return total
        }).then(()=>{
            cy.log("total: "+total)
            cy.get('h3 > strong').should('contain',total)
        })

         cy.get('h3 > strong').then((totalUI)=>{
            var priceTotal=Number((totalUI.text().replace('₹. ','')))
            expect(total).to.equal(priceTotal)
            expect(total).to.be.eq(priceTotal)
         })

        cy.get('button.btn-success').click();
        cy.get('#country').type('Macedonia',this.timeout(6000));
        cy.get('.suggestions > ul > li > a').should('have.text','Macedonia').and('be.visible');
        cy.get('.suggestions > ul > li > a').click();
        cy.get('.checkbox > label').click();
        cy.get('#checkbox2').check();
        cy.get('.ng-untouched > .btn').click();
        cy.get('.alert').click();
        // Dokolku ne e postaven tekstot celosno so se prazni mesta -> validacijata paga
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
        //
        //Ova e uspesna validacija no ne e konstantna
        //cy.get('.alert').should('have.text', '\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ');
        //Za taa namena moze da se koristi i sledniot blok od komandi:
        cy.get('.alert').then(($el)=>{
            const alertText=$el.text()
            expect(alertText.includes('Success')).to.be.true
        })
        cy.get('.alert').should('be.visible');

    })

    it("POM HomePage test",function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        const homePage = new HomePage()
        homePage.getEditBox().should('have.attr','minlength','2');
        homePage.getEditBox().should('have.attr','required');
        cy.get('@dataSample').then((data)=>{
            homePage.getEditBox().type(data.name)
            homePage.getGender().select(data.gender);
            homePage.getSeconDataBinding().should('have.value',data.name)
        })
    //    homePage.getEditBox().type(this.data.name)
    //    homePage.getGender().select(this.data.gender);
    //    homePage.getSeconDataBinding().should('have.value',this.data.name)
        homePage.getEnterpreneurRadioBtn().should('be.disabled');
    })

})