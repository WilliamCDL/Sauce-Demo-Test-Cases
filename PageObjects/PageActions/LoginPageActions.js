const loginElementLocators = require('../PageElements/LoginPageElements.json')

 class loginPageElements{
    // Localiza o elemento/campo para o preenchimento do login e digita o dado informado
    tipeUsername(userToBeUse){
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(userToBeUse)
        return
    }
    // Localiza o elemento/campo para o preenchimento da senha e digita o dado informado
    tipePassword(passwordToBeUse){
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordToBeUse)
        return
    }
    // Localiza o botão para realizar login e realiza a ação de click do mouse
    clickLoginButton(){
        cy.get(loginElementLocators.LoginPageLocators.login_button).click()
        return
    }
}

module.exports = new loginPageElements();