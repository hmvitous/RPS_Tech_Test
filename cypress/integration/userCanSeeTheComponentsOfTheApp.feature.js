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
      cy.get('#3').should('contain', 'Rock')
    })

    it('displays paper option', () => {
      cy.get('#1').should('contain', 'Paper')
    })

    it('displays scissors option', () => {
      cy.get('#2').should('contain', 'Scissors')
    })
  })
});
