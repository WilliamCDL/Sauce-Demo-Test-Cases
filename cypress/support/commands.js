import loginPageActions from "../../PageObjects/PageActions/LoginPageActions"
import inventoryPageActions from "../../PageObjects/PageActions/InventoryPageActions"

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

Cypress.Commands.add('login', (username, password) => {

    loginPageActions.tipeUsername(username)
    loginPageActions.tipePassword(password)
    loginPageActions.clickLoginButton()

    return
});

Cypress.Commands.add('productsChecking', (index, name, description, price, butonName, imageName) => {

    inventoryPageActions.checkProducName(index, name)
    inventoryPageActions.checkProducDescription(index, description)
    inventoryPageActions.checkProducPrice(index, price)
    inventoryPageActions.checkProducButton(index, butonName)
    inventoryPageActions.checkProducImage(index, imageName)
    return
});