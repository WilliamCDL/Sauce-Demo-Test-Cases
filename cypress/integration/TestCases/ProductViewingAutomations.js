/// <reference types="Cypress" />
import "../../support/commands.js"
const testCases = require('../../fixtures/data-driven/productsData.json')

describe('Page Object technical challenge', function () {
    this.beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.login('standard_user', 'secret_sauce')
    }
    )
    //Roda a suite de teste com os dados presentes no arquivo 'products.json"
    //Está validação é para os 6 primeiros produtos ( tamanho da amostra do site) em ordem de A to Z
    testCases.forEach(test => {
        it('Products information checking', function () {
            cy.productsChecking(test.index, test.producName, test.producDescription, test.producPrice, test.buttonName, test.image)
        })
    }
    )
})