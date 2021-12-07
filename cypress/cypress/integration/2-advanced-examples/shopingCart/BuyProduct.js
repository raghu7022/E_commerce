/// <reference types="cypress" />

describe('ShopingCart', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('#Login').click()
        cy.get('#emali').type('Raghu@example.com')
        cy.get('#password').type('123456')
        cy.get('#SignInBtn').click()
    })

    it('Buy a product', () => {
        cy.wait(4000)
        cy.get(':nth-child(3) > .my-3 > :nth-child(1) > .card-img-top').click()
        cy.get('#AddToCart').click();
        cy.get('#proceed').click()
        cy.get('#address').type('Main Road')
        cy.get('#city').type('Bidar')
        cy.get('#pinCode').type('585412')
        cy.get('#country').type('india')
        cy.get('#payment').click()
        cy.get('#placeOrder').click()
        cy.get('#order').click()
        cy.get('#orderId').should('contain', 'Order Id:')
    })
})