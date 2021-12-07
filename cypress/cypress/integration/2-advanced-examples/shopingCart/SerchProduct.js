/// <reference types="cypress" />

describe('ShopingCart', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('#Login').click()
        cy.get('#emali').type('Raghu@example.com')
        cy.get('#password').type('123456')
        cy.get('#SignInBtn').click()
    })

    it('Search A Product', () => {
        cy.wait(4000)
        cy.get('#searchBox').type('Almond')
        cy.get('#search').click()
        cy.wait(400)
        cy.get('strong').should('contain', 'Almond')
    })
})

