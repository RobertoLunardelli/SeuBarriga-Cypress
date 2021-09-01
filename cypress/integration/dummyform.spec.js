///<reference types = "cypress"/>

it('should be able to write the informations and click submit',()=>{
    cy.visit('http://way2automation.com/way2auto_jquery/index.php')

    cy.get('#load_box > #load_form > :nth-child(5) > input').type("Roberto")

    cy.get('#load_box > #load_form > :nth-child(6) > input').type("12345678")

    cy.get(':nth-child(7) > input').type("email@email.com.br")

    cy.get('select').select("Brazil")

    cy.get(':nth-child(9) > input').type("Porto Alegre")
    
    cy.get(':nth-child(10) > input').type("Roberto")

    cy.get(':nth-child(11) > input').type("12345")

    cy.get(':nth-child(12) > .span_1_of_4 > .button').click()
    
    cy.get('#alert').should('have.text','This is just a dummy form, you just clicked SUBMIT BUTTON')

})
