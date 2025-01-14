/// <reference types="Cypress" />

import loginPageActions  from "../../../PageObjects/PageActions/LoginPageActions"
import  inventoryPageActions  from "../../../PageObjects/PageActions/InventoryPageActions"
const testCases = require('../../fixtures/data-driven/loginData.json')

describe('Page Object technical challenge', function(){
    //Antes de cada teste retornar a pagina de login
    this.beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        }
    )
    //Roda a suite de teste com os dados presentes no arquivo 'loginData.json"
    testCases.forEach( test => {
        it(test.name, function(){
            //para testes com login ou senha vazios faz-se necessario uma verificação para não executar comandos pois o type não aceita strings vazias
            if(!test.username){

            }else{
                loginPageActions.tipeUsername(test.username)
            }
            if(!test.password){

            }else{
                loginPageActions.tipePassword(test.password)
            }

            loginPageActions.clickLoginButton()
            
            //para o caso do login ser realizado com sucesso é chamada a verificação na tela inventory, para caso de bloqueio ou erro a verificação na propia pagina de login é chamada
            if(test.name === 'Login to inventory page successfully'){
                inventoryPageActions.checkLoginSuccess(test.expected)
            }else{
                loginPageActions.checkErrorMessage(test.expected)
            }
            
        })
    }
    )
})