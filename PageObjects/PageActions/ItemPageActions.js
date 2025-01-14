const itemyElementLocators = require('../PageElements/ItenPageElements.json')

class itemPageElements {
    
    //Verifica se o produto possuo o nome correto
    checkProducName( textToBeVerify) {
        cy.get(itemyElementLocators.ItemPageLocators.item_namne).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo a descrição correta
    checkProducDescription( textToBeVerify) {
        cy.get(itemyElementLocators.ItemPageLocators.item_description).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo o preço correto
    checkProducPrice( textToBeVerify) {
        cy.get(itemyElementLocators.ItemPageLocators.item_price).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo o nome de botão correto
    checkProducButton( textToBeVerify) {
        cy.get(itemyElementLocators.ItemPageLocators.item_button).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo a src correta
    checkProducImage( textToBeVerify) {
        cy.get(itemyElementLocators.ItemPageLocators.item_image).should('have.attr', 'src', textToBeVerify)
        return

    }
    
}

module.exports = new itemPageElements();