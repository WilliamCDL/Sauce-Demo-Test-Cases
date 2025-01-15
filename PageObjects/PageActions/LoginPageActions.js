const loginElementLocators = require('../PageElements/LoginPageElements.json')

class loginPageElements {
    tipeUsername(userToBeUse) {
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(userToBeUse)
        return
    }
    tipePassword(passwordToBeUse) {
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordToBeUse)
        return
    }
    clickLoginButton() {
        cy.get(loginElementLocators.LoginPageLocators.login_button).click()
        return
    }

    //compara a mensagem de erro retornada com a mensagem de erro esperada enviada pelo usuario
    checkErrorMessage(textToBeVerify) {
        cy.get(loginElementLocators.LoginPageLocators.error_text).should('have.text', textToBeVerify)
        return

    }
}

module.exports = new loginPageElements();