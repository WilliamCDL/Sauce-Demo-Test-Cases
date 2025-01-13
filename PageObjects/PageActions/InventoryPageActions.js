const inventoryElementLocators = require('../PageElements/InventoryPageElements.json')

class inventoryPageElements{
    // Verificação da existencia da palavra "Products"
    checkLoginSuccess(){
        cy.get(inventoryElementLocators.InventoryPageLocators.product_label).should('have.text','Products')
        return 
    
    }
}

module.exports = new inventoryPageElements();