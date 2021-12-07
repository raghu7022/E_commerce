/// <reference types="cypress" />

describe('ShopingCart', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('#Login').click()
        cy.get('#emali').type('Raghu@example.com')
        cy.get('#password').type('123456')
        cy.get('#SignInBtn').click()
    })

    it('Product Carousel', () => {
        cy.get('.spinner-border').wait(1000)
        cy.get('.carousel-control-next-icon').click()
        cy.wait(1000)
        cy.get('.active > a > .carousel-caption > #productName').should('not.contain', 'Ruchi Gold')
    })
})
