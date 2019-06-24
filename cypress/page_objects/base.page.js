const basePage = {
    openUrl: page => {
        cy.visit(page);
    },
    verifyUrl: url => {
        cy.url().should('include', url);
    },
    clickButton: button => {
        // cy.get(pageObjects.getDataTest(button))
        // .first()
        // .click();
        // cy.get(pageObjects.getDataTest(button)).then(teste => {
        //     teste.array.forEach(element => {
                
        //     });
        //     teste[1].click();
        // });
        // cy.get(pageObjects.getDataTest(button)).each(()) => {

        // })

        cy.get(pageObjects.getDataTest(button)).each((buttons, i) => {
            console.log(i);
            console.log(buttons[i].click());
          })
    },
    fillField: (field, text) => {
        cy.get(pageObjects.getDataTest(field))
            .first()
            .focus()
            .type(text);
    },
    verifyLabel: (element, label) => {
        cy.get(pageObjects.getDataTest(element)).should('have.contain', label);
    }
};

const pageObjects = {
    getDataTest(id) {
        return `[data-test="${id}"]`;
    }
};

module.exports = basePage;