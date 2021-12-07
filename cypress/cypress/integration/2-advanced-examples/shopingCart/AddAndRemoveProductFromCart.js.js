/// <reference types="cypress" />

describe('ShopingCart', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('#Login').click()
        cy.get('#emali').type('Raghu@example.com')
        cy.get('#password').type('123456')
        cy.get('#SignInBtn').click()
    })

    it('Add and remove product from cart', () => {
        cy.wait(4000)
        cy.get(':nth-child(3) > .my-3 > :nth-child(1) > .card-img-top').click()
        cy.get('#AddToCart').click();
        cy.get('#delete').click()
        cy.get('h4 > a').should('contain', 'Go Back To Home')
    })
})

