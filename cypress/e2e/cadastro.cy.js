/// <reference types="cypress" />

import Home from "../support/pages/home/index"
import Deliver from "../support/pages/deliver/index"
import Utilidades from "../support/utilidades"


describe('Cadastro de entregador para Buger Eats', () => {


    it('Deve efetuar cadastro inserindo CNH com método de entrega Moto', () => {

        const dadosUsuario = Utilidades.gerarDadosFakerUsuario()
        const dadosEndereco = Utilidades.gerarDadosFakerEndereco()               
            
        Home.acessarHomeBugerEats("https://buger-eats.vercel.app/")

        Home.acessarTelaCadastro()

        Deliver.preencherDadosUsuario({
            nomeCompleto: dadosUsuario.nomeCompleto,
            cpf: dadosUsuario.cpf,
            email: dadosUsuario.email,
            telefone: dadosUsuario.telefone
        })

        Deliver.preencherEnderecoUsuario({
            cep: dadosEndereco.cep,
            numero: dadosEndereco.numero,
            complemento: dadosEndereco.complemento
        })        

        Deliver.selecionarMetodoEntrega('Moto')

        Deliver.efetuarUploadCnh({
            caminhoArquivo: 'cypress/support/imagem/cnh.jpg',
            nomeArquivo: 'cnh.jpg'
        })

        Deliver.validarCadastro()
    })

})