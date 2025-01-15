const cartElementLocators = require('../PageElements/CartPageElements.json')
class cartPageElements {
    checkProducName(index, textToBeVerify) {
        cy.get(cartElementLocators.CartPageLocators.cart_item_namne).eq(index).should('have.text', textToBeVerify)
        return

    }
    checkProducButton2(index, textToBeVerify) {
        cy.get(cartElementLocators.CartPageLocators.cart_button2).eq(index).should('have.text', textToBeVerify)
        return
    }

    clickButton2(index) {
        cy.get(cartElementLocators.CartPageLocators.cart_button2).eq(index).click()
    }

    cartCount(value) {
        cy.get(cartElementLocators.CartPageLocators.cart_count).should('have.text', value)
    }

    cartCheckout() {
        cy.get(inventoryElementLocators.InventoryPageLocators.car_count).click()
    }
}
module.exports = new cartPageElements();