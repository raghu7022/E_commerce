/// <reference types="cypress" />

describe('ShopingCart', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('SignIn and SignOut', () => {
        cy.get('#Login').click()
        cy.get('#emali').type('Raghu@example.com')
        cy.get('#password').type('123456')
        cy.get('#SignInBtn').click()
        cy.wait(4000)
        cy.get('#username').click()
        cy.get('#LogOut').click()
        cy.get('#signIn').should('contain', 'Sign In')
    })
})

