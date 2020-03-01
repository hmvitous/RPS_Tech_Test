describe('User can see components of the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('displays the footer', () => {
    it('displays the footer', () => {
      cy.get('#footer').should('exist');
    });
  });

  describe('displays the three options', () => {
    it('displays rock option', () => {
      cy.get('#rock-button').should('contain', 'Rock')
    })

    it('displays paper option', () => {
      cy.get('#paper-button').should('contain', 'Paper')
    })

    it('displays scissors option', () => {
      cy.get('#scissors-button').should('contain', 'Scissors')
    })
  })
});
