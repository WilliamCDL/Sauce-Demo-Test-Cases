/// <reference types="Cypress" />

import loginPageActions  from "../../../PageObjects/PageActions/LoginPageActions"
import  inventoryPageActions  from "../../../PageObjects/PageActions/InventoryPageActions"


describe('Page Object technical challenge', function(){
    //Antes de cada teste retornar a pagina de login
    this.beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        }
    )

    //Verificar se com dados validos o login é realizado corretamente, com assertiva para verificar o titulo "Products"
    it('Login to inventory page successfully', function(){
        loginPageActions.tipeUsername('standard_user')
        loginPageActions.tipePassword('secret_sauce')
        loginPageActions.clickLoginButton()

        inventoryPageActions.checkLoginSuccess()
    })


})