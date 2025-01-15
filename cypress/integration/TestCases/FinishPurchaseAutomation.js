/// <reference types="Cypress" />
import "../../support/commands.js"
import inventoryPageActions from "../../../PageObjects/PageActions/InventoryPageActions"
import cartPageActions from "../../../PageObjects/PageActions/CartPageActions.js"
const productCases = require('../../fixtures/data-driven/productsData.json')
const informationCases = require("../../fixtures/data-driven/personalInformation.json")

describe('Purchase Test Cases technical challenge', function () {
    //realiza validação de confirmação de dados pessoais com campos faltantes ou completos
    it('Todas Validações da tela de inforamções pessoais', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        productCases.forEach(item => {
            cy.addToCartFromList(item.index, item.index + 1)
        })
        inventoryPageActions.cartClick()
        cartPageActions.cartCheckoutClick()
        informationCases.forEach(information => {
            cy.informationTest(information.fistName, information.lastName, information.postalCode, information.erroMessage)
        })
        cy.resetData()
    }
    )
    //realiza testes sobre a tela de confirmação final e tela após confirmação
    it('Validações da tela de finalização e pós finalização', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        productCases.forEach(item => {
            cy.addToCartFromList(item.index, item.index + 1)
        })
        inventoryPageActions.cartClick()
        cartPageActions.cartCheckoutClick()

        cy.informationConfirmt(informationCases[3].fistName, informationCases[3].lastName, informationCases[3].postalCode)
        cy.priceTest("Item total: $129.94", "Tax: $10.40", "Total: $140.34")
        cartPageActions.checkoutFinishButtonClick()
        cy.finalMessageText()

    }
    )
    //verifica o cenario de cancelamento de finalização
    it('Validações de cancelamento da finalização', function () {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        productCases.forEach(item => {
            cy.addToCartFromList(item.index, item.index + 1)
        })
        inventoryPageActions.cartClick()
        cartPageActions.cartCheckoutClick()

        cy.informationConfirmt(informationCases[3].fistName, informationCases[3].lastName, informationCases[3].postalCode)
        cy.priceTest("Item total: $129.94", "Tax: $10.40", "Total: $140.34")
        cartPageActions.checkoutCancelFinishButtonClick()
        inventoryPageActions.cartCount(6)
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')
    }
    )

}
)