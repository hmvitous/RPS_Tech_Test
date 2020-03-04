describe('User can select an option', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    describe('selects an option', () => {
      it('select rock', () => {
        cy.get('#3').click()
      });

      it('select paper', () => {
        cy.get('#1').click()
      });

      it('select scissors', () => {
        cy.get('#2').click()
      });

    });
  
})