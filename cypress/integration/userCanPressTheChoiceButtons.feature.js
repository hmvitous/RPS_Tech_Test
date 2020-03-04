describe("User can select an option", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("selects an option", () => {
    it("select rock", () => {
      cy.get("#3").click();
      cy.get("#player-image-id")
        .invoke("attr", "src")
        .should("include", "rock.png");
    });

    it("select paper", () => {
      cy.get("#1").click();
      cy.get("#player-image-id")
        .invoke("attr", "src")
        .should("include", "paper.png");
    });

    it("select scissors", () => {
      cy.get("#2").click();
      cy.get("#player-image-id")
        .invoke("attr", "src")
        .should("include", "scissors.png");
    });

    it("select play again", () => {
        cy.get("#again").click();
        cy.get("#player-image-id")
          .invoke("attr", "src")
          .should("include", "player_default.png");
      });
  
  });
});
