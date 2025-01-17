/// <reference types="Cypress" />
import "../../support/commands.js"
const testCases = require('../../fixtures/data-driven/loginData.json')

describe('Login technical challenge', function () {
    //Testes sobre login, com dados faltantes, usuarios bloqueados e corretos
    this.beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    }
    )
    //Roda a suite de teste com os dados presentes no arquivo 'loginData.json"
    testCases.forEach(test => {
        it(test.name, function () {
            cy.loginTest(test.name, test.username, test.password, test.expected)
        })
    }
    )
})