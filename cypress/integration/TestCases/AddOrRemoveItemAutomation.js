/// <reference types="Cypress" />
import "../../support/commands.js"
import inventoryPageActions from "../../../PageObjects/PageActions/InventoryPageActions"
const testCases = require('../../fixtures/data-driven/productsData.json')

describe('Add/Remove to cart From a List technical challenge', function () {



    //Adiciona todos os itens a lista, o index esta como 0 pois ao adicionar um item o proximo item da lista vira o primeiro.
    //Para confirmação de adição foi verificado a aparição do botão "REMOVE" no index correto
    //E verificado o incremento do contador do carrinho
    it('Adição de todos os itens ao carrinho pela Lista', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        testCases.forEach(test => {
            cy.addToCartFromList(test.index, test.index + 1)
        })
    }
    )

    //
    it('Remoção de todos os itens ao carrinho pela Lista', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        testCases.forEach(test => {
            cy.removeCartFromList(test.index, 5-test.index)
        })
    }
    )

}
)


describe('Add/Remove to cart from a Selected Item technical challenge', function () {



    //Adiciona todos os itens a lista, o index esta como 0 pois ao adicionar um item o proximo item da lista vira o primeiro.
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

    it('Remoção de todos os itens do carrinho selecionando produto', function () {
        testCases.forEach(test => {
            cy.visit('https://www.saucedemo.com/v1/inventory.html')
            cy.clickNameProduct(test.index)
            cy.removeProduct(test.producName, 5-test.index)
        })
    }
    )
})

describe('Add From a List Remove From cart Item technical challenge', function () {



    //Adiciona todos os itens a lista, o index esta como 0 pois ao adicionar um item o proximo item da lista vira o primeiro.
    //Para confirmação de adição foi verificado a aparição do botão "REMOVE" no index correto
    //E verificado o incremento do contador do carrinho

    it('Adição de todos os itens ao carrinho pela Lista', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        testCases.forEach(test => {
            cy.addToCartFromList(test.index, test.index + 1)
        })
    }
    )

    it('Remoção de todos os itens pelo carrinho', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        testCases.forEach(test => {
            inventoryPageActions.cartClick()
            cy.removeFromCart(test.producName,5-test.index)
        })
    }
    )
})