/// <reference types="Cypress" />
import "../../support/commands.js"
import inventoryPageActions from "../../../PageObjects/PageActions/InventoryPageActions"
const testCases = require('../../fixtures/data-driven/productsData.json')

describe('Add/Remove to cart From a List technical challenge', function () {

    //Adiciona todos os itens a lista
    //Para confirmação de adição foi verificado a aparição do botão "REMOVE" no index correto
    //E verificado o incremento do contador do carrinho
    it('Adição de todos os itens ao carrinho pela Lista', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        testCases.forEach(test => {
            cy.addToCartFromList(test.index, test.index + 1)
        })
    }
    )

    //Remove os itens adicionados no teste anterior
    //e verifica o decremento do contador do carrinho
    it('Remoção de todos os itens ao carrinho pela Lista', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        testCases.forEach(test => {
            cy.removeCartFromList(test.index, 5 - test.index)
        })
    }
    )
}
)


describe('Add/Remove to cart from a Selected Item technical challenge', function () {

    //Adiciona todos os itens a lista via acesso de cada produto
    //Para confirmação de adição foi verificado a aparição do botão "REMOVE" no index correto
    //E verificado o incremento do contador do carrinho

    it('Adição de todos os itens ao carrinho selecionando produto', function () {
        testCases.forEach(test => {
            cy.visit('https://www.saucedemo.com/v1/inventory.html')
            cy.clickNameProduct(test.index)
            cy.addProduct(test.producName, test.index + 1)
        })
    }
    )

    //Remove os itens via acesso de cada produto adicionados no teste anterior
    //e verifica o decremento do contador do carrinho
    it('Remoção de todos os itens do carrinho selecionando produto', function () {
        testCases.forEach(test => {
            cy.visit('https://www.saucedemo.com/v1/inventory.html')
            cy.clickNameProduct(test.index)
            cy.removeProduct(test.producName, 5 - test.index)
        })
    }
    )
})

describe('Add From a List Remove From cart Item technical challenge', function () {

    //adição utilizada anteriormente para teste de remoção pelo Cart
    it('Adição de todos os itens ao carrinho pela Lista', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        testCases.forEach(test => {
            cy.addToCartFromList(test.index, test.index + 1)
        })
    }
    )
    //Remove os itens via Cart
    //e verifica o decremento do contador do carrinho
    it('Remoção de todos os itens pelo carrinho', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        testCases.forEach(test => {
            inventoryPageActions.cartClick()
            cy.removeFromCart(test.producName, 5 - test.index)
        })
    }
    )
})