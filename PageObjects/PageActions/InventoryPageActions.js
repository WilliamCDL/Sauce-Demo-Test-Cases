const inventoryElementLocators = require('../PageElements/InventoryPageElements.json')

export class inventoryPageElements{
 
    checkLoginSuccess(){
        cy.get(inventoryElementLocators.InventoryPageLocators.product_label).should('have.text','Products')
        return 
    
    }
}