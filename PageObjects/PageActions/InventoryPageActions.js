const inventoryElementLocators = require('../PageElements/InventoryPageElements.json')

class inventoryPageElements {
    // Verificação da existencia da palavra "Products"
    checkLoginSuccess(textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.product_label).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo o nome correto
    checkProducName(index, textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_namne).eq(index).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo a descrição correta
    checkProducDescription(index, textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_description).eq(index).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo o preço correto
    checkProducPrice(index, textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_price).eq(index).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo o nome de botão correto add
    checkProducButton(index, textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_button).eq(index).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo o nome de botão correto remove
    checkProducButton2(index, textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_button2).eq(index).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo a src de imagem correta
    checkProducImage(index, textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_image).find('img').eq(index).should('have.attr', 'src', textToBeVerify)
        return

    }
    clickNameItem(index) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_namne).eq(index).click()
    }

    clickButton(index) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_button).eq(index).click()
    }
    clickButton2(index) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_button2).eq(index).click()
    }
    //verifica quantidade de itens no carrinho
    cartCount(index) {
        cy.get(inventoryElementLocators.InventoryPageLocators.car_count).should('have.text', index)
    }
    cartClick() {
        cy.get(inventoryElementLocators.InventoryPageLocators.car_button).click()
    }
    menuClick() {
        cy.get(inventoryElementLocators.InventoryPageLocators.menu_button).click()
    }
    resetClick() {
        cy.get(inventoryElementLocators.InventoryPageLocators.reset_button).click()
    }
}
module.exports = new inventoryPageElements();