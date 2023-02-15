/// <reference types="cypress" />

let log = console.log;

describe('loops', () => {
	it('repeatable action log()', () => {
		log('1');
		cy.visit('https://www.google.com');
		log('2');
		cy.get('[name=q]').type('hello world');
		log('3');
    })
    it('for loop', () => {
		/* for loop */
		for (let i = 0; i < 3; i++) {
		    log('- ', i);   // ova ke se izvrsi odma vo tekot na izvrsuvanje na testot
		    cy.then(() => log('* ', i)); //ovaa komanda ke bide stavena na queue da se izvrsi po vcituvanjeto na celiot kontekst na testot
		}
    })

    it('for each loop', () => {
		/* for each loop */
		cy.wrap(['a', 'b', 'c']).each((ele) => log(ele));

		/* Primena na for each loop */
        cy.visit('https://www.google.com');
		cy.get('a').each((ele) => log(ele.text()));
    })

    it('while loop', () => {
        let i=0
        while (i<10) {
            log(i)
            i++
        }
	});

    it('community question 1', () => {
		/* community question 1 */
        /* Vo ovaj primer e prikazan problemot od for loop test case
        - dokolku log() e na isto nivo so for ciklusot togas ke ispecati 0
        - dokolku log() e vo then() odkako ke zavrsi testot togas ke ispecati 10*/
		let list = [];
		for (let i = 0; i < 10; i++) {
            
		    cy.then(() => {     // dokolku nema then() togas log() ke ispecati 10
		        list.push(i);
		    });
            cy.log(list)
		}
		log(list.length);  // ke ispecati 0 vo konzola
        cy.log(list.length)
		cy.then(() => {
		    log(list.length); // ke ispecati 10 vo konzola
		});
    })

    it('community question 2', () => {
        // 	/* loop can not break if the value is in then() function */
     	let loop = true;
        let list = [];
        cy.visit('https://www.google.com');
        //cy.get('[name=q]').type('hello world');
        let i=0
        while (loop && i<10) {
            log("sm")
    	    cy.get('[name=q]').then((ele) => {
                const title=ele.attr('title')
                if (title === 'Пребарајте') {
                    loop = false;
                    log("from the loop:  "+title)
                    list.push(i);
                }
    	    });
            i++
        }
        cy.log("list.length>"+list.length)
        cy.then(() => {
		    log(list.length); // ke ispecati 10 vo konzola
		});
    });
});