/// <reference types="cypress" />

const el = require('./elements').ELEMENTS
const elHome = require('../home/elements').ELEMENTS

class Deliver {

    preencherDadosUsuario({ nomeCompleto, cpf, email, telefone }) {
        cy.get(el.txtNomeCompleto).should('be.visible').type(nomeCompleto)
        cy.get(el.txtCPF).should('be.visible').type(cpf)
        cy.get(el.txtEmail).should('be.visible').type(email)
        cy.get(el.txtTelefone).should('be.visible').type(telefone)
    }

    preencherEnderecoUsuario({ cep, numero, complemento }) {
        cy.get(el.txtCep).should('be.visible').type(cep)
        cy.get(el.btnBuscarCep).should('be.visible').click()
        cy.wait(1000)
        cy.get(el.txtNumero).should('be.visible').type(numero)
        cy.get(el.txtComplemento).should('be.visible').type(complemento)
    }

    selecionarMetodoEntrega(metodoEntrega) {
        switch (metodoEntrega) {
            case 'Moto':
                cy.get(el.btnMetodoEntrega).eq(0).should('be.visible').and('have.text', 'Moto').click()
                cy.get(el.selectMetodoEntrega).should('be.visible')
                break

            case 'Bicicleta':
                cy.get(el.btnMetodoEntrega).eq(1).should('be.visible').and('have.text', 'Bicicleta').click()
                cy.get(el.selectMetodoEntrega).should('be.visible')
                break

            case 'Van/Carro':
                cy.get(el.btnMetodoEntrega).eq(2).should('be.visible').and('have.text', 'Van/Carro').click()
                cy.get(el.selectMetodoEntrega).should('be.visible')
                break
        }
    }

    efetuarUploadCnh({ caminhoArquivo, nomeArquivo }) {
        cy.get(el.txtFotoChn).should('be.visible').and('have.text', 'Foto da sua CNH')
        cy.get(el.inputImage)
            .invoke('show')
            .selectFile(caminhoArquivo)
            .then(($input) => {
                console.log($input)
                const _files = $input[0].files
                expect(_files[0].name).to.eq(nomeArquivo)
            })
        cy.get(el.btnCadastrar)
            .should('be.visible')
            .and('have.text', 'Cadastre-se para fazer entregas')
            .click()
    }

    validarCadastro() {
        cy.get(el.popupCadastroSucesso).should('be.visible').and('have.text', 'Aí Sim...')
        cy.get(el.btnFecharPopupSucesso).should('be.visible').click()
        cy.get(elHome.txtTituloHome)
            .should('be.visible')
            .and('have.text', 'Seja um parceiro entregador pela Buger Eats')
    }
}

export default new Deliver()