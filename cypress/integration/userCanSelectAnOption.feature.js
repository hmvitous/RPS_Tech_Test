describe("User can select an option", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    describe('select rock option', () => {
      beforeEach(() => {
        cy.get('#rock').click();
      });
  
    });
});