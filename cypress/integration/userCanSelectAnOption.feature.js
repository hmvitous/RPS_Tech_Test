describe("User can select an option", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("select rock option", () => {
    beforeEach(() => {
      cy.get("#rock-button").click();
    });

    it("rock image should display", () => {
      cy.get("#rock-image").should("exist");
    });

    it("does not display paper image", () => {
      cy.get("#paper-image").should("not.exist");
    });

    it("does not display scissors image", () => {
      cy.get("#scissors-image").should("not.exist");
    });
  });


});
