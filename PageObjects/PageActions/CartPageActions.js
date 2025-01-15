const cartElementLocators = require('../PageElements/CartPageElements.json')
class cartPageElements {
    //verifica o nome do produto selecionado com o nome enviado
    checkProducName(index, textToBeVerify) {
        cy.get(cartElementLocators.CartPageLocators.cart_item_namne).eq(index).should('have.text', textToBeVerify)
        return

    }
    //verifica o nome do botão selecionado com o nome do botão enviado
    checkProducButton2(index, textToBeVerify) {
        cy.get(cartElementLocators.CartPageLocators.cart_button2).eq(index).should('have.text', textToBeVerify)
        return
    }

    clickButton2(index) {
        cy.get(cartElementLocators.CartPageLocators.cart_button2).eq(index).click()
    }
    //verifica valor numerico no carrinho, se atentar em caso de value '0' tratar antes pois ao estar como 0 o campo não é encontrado
    cartCount(value) {
        cy.get(cartElementLocators.CartPageLocators.cart_count).should('have.text', value)
    }

    cartCheckoutClick() {
        cy.get(cartElementLocators.CartPageLocators.cart_checkout).click()
    }
    checkoutFistName(text) {
        cy.get(cartElementLocators.CartPageLocators.fisrt_name_tex).type(text)
    }
    checkoutLastName(text) {
        cy.get(cartElementLocators.CartPageLocators.last_name_text).type(text)
    }
    checkoutPostalCode(text) {
        cy.get(cartElementLocators.CartPageLocators.postal_code_text).type(text)
    }
    checkoutFistNameClear() {
        cy.get(cartElementLocators.CartPageLocators.fisrt_name_tex).clear()
    }
    checkoutLastNameClear() {
        cy.get(cartElementLocators.CartPageLocators.last_name_text).clear()
    }
    checkoutPostalCodeClear() {
        cy.get(cartElementLocators.CartPageLocators.postal_code_text).clear()
    }
    ////verifica a mensagem de erro retornada com a mensagem de erro esperada enviada pelo usuario
    checkErroMessage(textToBeVerify) {
        cy.get(cartElementLocators.CartPageLocators.erro_text).should('have.text', textToBeVerify)
        return
    }
    checkoutContinueButtonClick() {
        cy.get(cartElementLocators.CartPageLocators.button_continue).click()
    }
    //verifica o valor da soma dos itens apresentada com a enviada pelo usuario
    checkValuelItem(value) {
        cy.get(cartElementLocators.CartPageLocators.value_itens).should('have.text', value)
        return
    }
    //verifica o valor da taxa apresentada com a enviada pelo usuario
    checkValueTax(value) {
        cy.get(cartElementLocators.CartPageLocators.value_tax).should('have.text', value)
        return
    }
    //verifica a soma de valor total e taxa apresentada com a soma enviada pelo usuario
    checkTotalSum(value) {
        cy.get(cartElementLocators.CartPageLocators.total_sum).should('have.text', value)
        return
    }
    checkoutFinishButtonClick() {
        cy.get(cartElementLocators.CartPageLocators.button_finish).click()
    }
    checkoutCancelFinishButtonClick() {
        cy.get(cartElementLocators.CartPageLocators.button_cancel).click()
    }
    //verificação da mensagem1 de sucesso pos finalização da compra
    checkFinalMessage1(textToBeVerify) {
        cy.get(cartElementLocators.CartPageLocators.final_message1).should('have.text', textToBeVerify)
        return
    }
    //verificação da mensagem2 de sucesso pos finalização da compra
    checkFinalMessage2(textToBeVerify) {
        cy.get(cartElementLocators.CartPageLocators.final_message2).should('have.text', textToBeVerify)
        return
    }

}
module.exports = new cartPageElements();