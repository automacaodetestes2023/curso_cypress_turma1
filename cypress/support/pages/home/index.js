/// <reference types="cypress" />

const el = require('./elements').ELEMENTS
const elDeliver = require('../deliver/elements').ELEMENTS

class Home {

    acessarHomeBugerEats(url) {
        cy.visit(url)
        cy.get(el.txtTituloHome).should('be.visible').and('have.text', 'Seja um parceiro entregador pela Buger Eats')
    }

    acessarTelaCadastro() {
        cy.get(el.btnCadastre).should('be.visible').and('have.text', 'Cadastre-se para fazer entregas').click()
        cy.get(elDeliver.txtTituloDeliver).should('be.visible').and('contain.text', 'Cadastre-se para')
    }
}

export default new Home()