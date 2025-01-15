/// <reference types="Cypress" />
import "../../support/commands.js"
const testCases = require('../../fixtures/data-driven/productsData.json')

describe('Page Object technical challenge', function () {
    //Caso queira que cada produto vire um teste individual descomentar o beforeeach e comentar as 2 primeiras linhas do primeiro "it"
    //identico para o segundo caso, comentando a linha do visit

    //this.beforeEach(() => {
    //    cy.visit('https://www.saucedemo.com/v1/')
    //    cy.login('standard_user', 'secret_sauce')
    //}
    //)

    //Roda a suite de teste com os dados presentes no arquivo 'products.json"
    //Está validação é para os 6 primeiros produtos ( tamanho da amostra do site) em ordem de A to Z
    //valida as informações da lista de produtos pela tela de inventory
    it('Products information checking on a List', function () {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.login('standard_user', 'secret_sauce')
        testCases.forEach(test => {
            cy.productsChecking(test.index, test.producName, test.producDescription, test.producPrice, test.buttonName, test.image)
        })
    }
    )
    //valida as informações de um produto especifico após ser selecionado
    it('Product information checking after selecting', function () {

        testCases.forEach(test => {
            cy.visit('https://www.saucedemo.com/v1/inventory.html')
            cy.clickNameProduct(test.index)
            cy.productChecking(test.producName, test.producDescription, test.producPrice, test.buttonName, test.image)
        })
    }
    )
})