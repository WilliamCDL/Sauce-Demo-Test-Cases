import loginPageActions from "../../PageObjects/PageActions/LoginPageActions"
import inventoryPageActions from "../../PageObjects/PageActions/InventoryPageActions"
import productPageActions from "../../PageObjects/PageActions/ItemPageActions"
import itemPageActions from "../../PageObjects/PageActions/ItemPageActions";
import cartPageActions from "../../PageObjects/PageActions/CartPageActions.js"
//teste de login
Cypress.Commands.add('loginTest', (name, username, password, expected) => {
    //para testes com login ou senha vazios faz-se necessario uma verificação para não executar comandos pois 
    // o type não aceita strings vazias
    if (!username) {

    } else {
        loginPageActions.tipeUsername(username)
    }
    if (!password) {

    } else {
        loginPageActions.tipePassword(password)
    }

    loginPageActions.clickLoginButton()

    //para o caso do login ser realizado com sucesso é chamada a verificação na tela inventory, 
    // para caso de bloqueio ou erro a verificação na propia pagina de login é chamada
    if (name === 'Login to inventory page successfully') {
        inventoryPageActions.checkLoginSuccess(expected)
        cy.url().should('be.equal','https://www.saucedemo.com/v1/inventory.html')
    } else {
        loginPageActions.checkErrorMessage(expected)
    }
    return
});
//realizar login
Cypress.Commands.add('login', (username, password) => {

    loginPageActions.tipeUsername(username)
    loginPageActions.tipePassword(password)
    loginPageActions.clickLoginButton()

    return
});
//verificação das informações de produto na pagina inventory
Cypress.Commands.add('productsChecking', (index, name, description, price, butonName, imageName) => {

    inventoryPageActions.checkProducName(index, name)
    inventoryPageActions.checkProducDescription(index, description)
    inventoryPageActions.checkProducPrice(index, price)
    inventoryPageActions.checkProducButton(index, butonName)
    inventoryPageActions.checkProducImage(index, imageName)
    return
});
//verificação de um produto individual após ser selecionado
Cypress.Commands.add('productChecking', (name, description, price, butonName, imageName) => {

    productPageActions.checkProducName(name)
    productPageActions.checkProducDescription(description)
    productPageActions.checkProducPrice(price)
    productPageActions.checkProducButton(butonName)
    productPageActions.checkProducImage(imageName)
    return
});
//Adição de um produto ao carrinho pelo inventory
//o index esta como 0 pois ao adicionar um item o proximo botão da lista vira o primeiro.
//ao alterar a função pare receber indice do botão se atentar entrada de dados para não receber falso possitivo (valido para os casos a baixo com indice 0)
Cypress.Commands.add('addToCartFromList', (index, count) => {
    inventoryPageActions.clickButton(0)
    inventoryPageActions.cartCount(count)
    inventoryPageActions.checkProducButton2(index, "REMOVE")
    return
});
//Remoção de um produto do carrinho pelo inventory
//o index esta como 0 pois ao adicionar um item o proximo botão da lista vira o primeiro.
Cypress.Commands.add('removeCartFromList', (index, count) => {
    inventoryPageActions.clickButton2(0)
    if (count === 0) {
    } else {
        inventoryPageActions.cartCount(count)
    }
    inventoryPageActions.checkProducButton(index, "ADD TO CART")
    return
});
//Adição de um produto ao carrinho após ser selecionado
Cypress.Commands.add('addProduct', (name, count) => {
    itemPageActions.clickButton()
    itemPageActions.cartCount(count)
    itemPageActions.checkProducName(name)
    itemPageActions.checkProducButton2("REMOVE")
    return
});
//Remoção de um produto ao carrinho após ser selecionado
Cypress.Commands.add('removeProduct', (name, count) => {
    itemPageActions.clickButton2()
    if (count === 0) {
    } else {
        itemPageActions.cartCount(count)
    }
    itemPageActions.checkProducName(name)
    itemPageActions.checkProducButton("ADD TO CART")
    return
});
//ação para acessar um produto pela tela de inventory
Cypress.Commands.add('clickNameProduct', (index) => {
    inventoryPageActions.clickNameItem(index)
    return
});
//remoção dos produtos pela tela do Cart
//o index esta como 0 pois ao remover um item o proximo item da lista vira o primeiro.
Cypress.Commands.add('removeFromCart', (name, count) => {
    cartPageActions.checkProducName(0, name)
    cartPageActions.clickButton2(0)
    if (count === 0) {
    } else {
        cartPageActions.cartCount(count)
    }

    return
});

//testes de preenchimento de informações pessoas com verificação de dados faltantes
Cypress.Commands.add('informationTest', (fist, last, postalCode, expected) => {
    //para testes com login ou senha vazios faz-se necessario uma verificação para não executar comandos pois 
    // o type não aceita strings vazias
    if (!fist) {

    } else {
        cartPageActions.checkoutFistName(fist)
    }
    if (!last) {

    } else {
        cartPageActions.checkoutLastName(last)
    }
    if (!postalCode) {

    } else {
        cartPageActions.checkoutPostalCode(postalCode)
    }

    cartPageActions.checkoutContinueButtonClick()

    if (!expected) {

    } else {
        cartPageActions.checkoutFistNameClear()
        cartPageActions.checkoutLastNameClear()
        cartPageActions.checkoutPostalCodeClear()
        cartPageActions.checkErroMessage(expected)
    }
    return
});

//realiza a confirmação dos dados sem checagem de validação, espera-se que seja preenchido todos os dados corretamente
Cypress.Commands.add('informationConfirmt', (fist, last, postalCode) => {

    cartPageActions.checkoutFistName(fist)
    cartPageActions.checkoutLastName(last)
    cartPageActions.checkoutPostalCode(postalCode)
    cartPageActions.checkoutContinueButtonClick()
    return
});
//validação do valor total de itens, taxa e preço final
Cypress.Commands.add('priceTest', (total, tax, sum) => {

    cartPageActions.checkValuelItem(total)
    cartPageActions.checkValueTax(tax)
    cartPageActions.checkTotalSum(sum)
    return
});
//validação de presença de mensagem após confirmação final de compra
Cypress.Commands.add('finalMessageText', () => {

    cartPageActions.checkFinalMessage1("THANK YOU FOR YOUR ORDER")
    cartPageActions.checkFinalMessage2("Your order has been dispatched, and will arrive just as fast as the pony can get\n                there!\n            ")
    return
});
//em alguns cenarios faz-se necessario realizar o reset dos dados tendo em vista que o sistema não o realiza ao utilizar o visit e acessar outra url
Cypress.Commands.add('resetData', () => {

    inventoryPageActions.menuClick()
    inventoryPageActions.resetClick()
    return
});