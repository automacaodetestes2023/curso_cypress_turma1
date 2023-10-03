/// <reference types="cypress" />

const faker = require('faker-br')

class Utilidades {

    gerarDadosFakerUsuario() {
        const fakerNomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`
        const fakerCpf = faker.br.cpf()
        const fakerEmail = faker.internet.email()
        const ddsValidos = ['11', '21', '31', '41', '48', '61']
        const dddEstado = faker.random.arrayElement(ddsValidos)
        const telefone = faker.random.number({ min: 10000000, max: 99999999 })
        const fakerTelefone = `${dddEstado}9${telefone}`
        return {
            nomeCompleto: fakerNomeCompleto,
            cpf: fakerCpf,
            email: fakerEmail,
            telefone: fakerTelefone
        }
    }

    gerarDadosFakerEndereco() {
        const fakerCep = faker.address.zipCodeValidByState()
        const fakerNumero = faker.address.streetAddress().match(/\d+/g).join('')
        const fakerComplemento = `Apto: ${faker.random.number({ min: 1, max: 300 })} Bloco: ${faker.random.number({ min: 1, max: 2 })}`
        return {
            cep: fakerCep,
            numero: fakerNumero,
            complemento: fakerComplemento
        }
    }
}

export default new Utilidades()