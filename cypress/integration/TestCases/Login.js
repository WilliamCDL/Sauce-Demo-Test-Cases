/// <reference types="Cypress" />

import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions"

const Login_Elements = new loginPageElements
describe('Page Object technical challenge', function(){

    it('Login Page', function(){
        cy.visit('https://www.saucedemo.com/v1/')
        Login_Elements.tipeUsername('standard_user')
        Login_Elements.tipePassword('secret_sauce')
        Login_Elements.clickLoginButton()
    })


})