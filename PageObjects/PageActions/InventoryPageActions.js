const inventoryElementLocators = require('../PageElements/InventoryPageElements.json')

class inventoryPageElements{
    // Verificação da existencia da palavra "Products"
    checkLoginSuccess(textToBeVerify){
        cy.get(inventoryElementLocators.InventoryPageLocators.product_label).should('have.text',textToBeVerify)
        return 
    
    }
}

module.exports = new inventoryPageElements();