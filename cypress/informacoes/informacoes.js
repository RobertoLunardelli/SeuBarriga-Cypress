import { Mapeamento } from "../support/mapeamento"

export class Informacoes {
    mapeamento = new Mapeamento
    url() {
        cy.visit('https://seubarriga.wcaquino.me/login')
    }

    login() {
        cy.get('#email').type("roberto@email.com")
        cy.get('#senha').type("12345")
        cy.get('.btn').click()
    }

    cadastrarNome() {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type("Roberto")
        cy.get('.btn').click()
    }

    cadastrarNomeVazio() {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('.btn').click()
    }
    verListaDeContas() {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('thead > tr > :nth-child(1)').should('have.text', 'Conta')

    }
    alterarNomeDaConta() {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.xpath('//*[@id="tabelaContas"]/tbody/tr/td[2]/a[1]/span').click()
        cy.get('#nome').type(" Lunardelli")
        cy.get('.btn').click()
    }
    deletarConta() {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.xpath('//*[@id="tabelaContas"]/tbody/tr/td[2]/a[2]/span').click()
    }
    movimentacaoComContaExistente() {
        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').type("Receita")
        cy.get('#data_transacao').type("01/09/2021")
        cy.get('#data_pagamento').type("01/09/2021")
        cy.get('#descricao').type("Pagamento")
        cy.get('#interessado').type("Gabriella")
        cy.get('#valor').type("1000")
        cy.get('#status_pago').click()
        cy.get('.btn').click()
    }
    resumoMensal() {
        cy.get(':nth-child(4) > a').click()
    }
    validacaoDeCamposObrigatorios() {
        cy.get(':nth-child(3) > a').click()
        cy.get('.btn').click()
    }
}