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
    //Verifica se o produto possuo o nome de botão correto
    checkProducButton(index, textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_button).eq(index).should('have.text', textToBeVerify)
        return

    }
    //Verifica se o produto possuo a src correta
    checkProducImage(index, textToBeVerify) {
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_image).find('img').eq(index).should('have.attr', 'src', textToBeVerify)
        return

    }
    clickNameItem(index){
        cy.get(inventoryElementLocators.InventoryPageLocators.inventory_item_namne).eq(index).click()
    }
    //cy.get(inventoryElementLocators.InventoryPageLocators.list_of_products).forEach((item,index) => {
    // console.log
    //    })
}

module.exports = new inventoryPageElements();