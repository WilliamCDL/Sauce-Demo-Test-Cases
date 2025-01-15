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
//verificação de produto/s numa lista
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

Cypress.Commands.add('addToCartFromList', (index, count) => {
    inventoryPageActions.clickButton(0)
    inventoryPageActions.cartCount(count)
    inventoryPageActions.checkProducButton2(index, "REMOVE")
    return
});

Cypress.Commands.add('removeCartFromList', (index, count) => {
    inventoryPageActions.clickButton2(0)
    if (count === 0) {
    } else {
        inventoryPageActions.cartCount(count)
    }
    inventoryPageActions.checkProducButton(index, "ADD TO CART")
    return
});

Cypress.Commands.add('addProduct', (name, count) => {
    itemPageActions.clickButton(0)
    itemPageActions.cartCount(count)
    itemPageActions.checkProducName(name)
    itemPageActions.checkProducButton2("REMOVE")
    return
});

Cypress.Commands.add('removeProduct', (name, count) => {
    itemPageActions.clickButton2(0)
    if (count === 0) {
    } else {
        itemPageActions.cartCount(count)
    }
    itemPageActions.checkProducName(name)
    itemPageActions.checkProducButton("ADD TO CART")
    return
});

Cypress.Commands.add('clickNameProduct', (index) => {
    inventoryPageActions.clickNameItem(index)
    return
});

Cypress.Commands.add('removeFromCart', (name, count) => {
    cartPageActions.checkProducName(0, name)
    cartPageActions.clickButton2(0)
    if (count === 0) {
    } else {
        cartPageActions.cartCount(count)
    }

    return
});