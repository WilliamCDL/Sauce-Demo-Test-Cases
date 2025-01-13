const loginElementLocators = require('../PageElements/LoginPageElements.json')
export class loginPageElements{
 
    tipeUsername(userToBeUse){
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(userToBeUse)
        return
    }

    tipePassword(passwordToBeUse){
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordToBeUse)
        return
    }

    clickLoginButton(){
        cy.get(loginElementLocators.LoginPageLocators.login_button).click()
        return
    }
}