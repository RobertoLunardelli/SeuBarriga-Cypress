/// <reference types ="cypress" />

import { Informacoes } from "../informacoes/informacoes"




describe('Cadastro SeuBarriga', () => {
    const informacoes = new Informacoes

    beforeEach(() => {
        informacoes.url()
        informacoes.login()
    })

    it('deve adicionar nova conta', () => {
        informacoes.cadastrarNome()
        cy.get('.alert').should('have.text', 'Conta adicionada com sucesso!')
    })
    it('deve tentar adicionar conta com nome vazio e retornar erro ', () => {
        informacoes.cadastrarNomeVazio()
        cy.get('.alert').should('have.text', 'Informe o nome da conta')
    })

    it('deve mostrar a lista de contas', () => {
        informacoes.verListaDeContas()
        cy.get('thead > tr > :nth-child(1)').should('have.text', 'Conta')
    })
    it('deve alterar o nome da conta', () => {
        informacoes.alterarNomeDaConta()
        cy.get('.alert').should('have.text', 'Conta alterada com sucesso!')
    })
    it('deve deletar a conta', () => {
        informacoes.deletarConta()
        cy.get('.alert').should('have.text', 'Conta removida com sucesso!')
    })
    it('movimentar com conta existente', () => {
        informacoes.cadastrarNome()
        informacoes.movimentacaoComContaExistente()
        cy.get('.alert').should('have.text', 'Movimentação adicionada com sucesso!')
    })
    it('mostrar resumo mensal', () => {
        informacoes.resumoMensal()
        cy.get('tbody > tr > :nth-child(1)').should('have.text', 'Pagamento')
    })
    it('validar campos obrigatorios das movimentacoes', () => {
        informacoes.validacaoDeCamposObrigatorios()
        cy.get('.alert > ul > :nth-child(1)').should('have.text', 'Data da Movimentação é obrigatório')
        cy.get('.alert > ul > :nth-child(2)').should('have.text', 'Data do pagamento é obrigatório')
        cy.get('.alert > ul > :nth-child(3)').should('have.text', 'Descrição é obrigatório')
        cy.get('.alert > ul > :nth-child(4)').should('have.text', 'Interessado é obrigatório')
        cy.get('.alert > ul > :nth-child(5)').should('have.text', 'Valor é obrigatório')
        cy.get('ul > :nth-child(6)').should('have.text', 'Valor deve ser um número')
    })
})
