describe("User can select an option", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("rock image should display", () => {
    cy.get("#3").click();
    cy.fixture("testing_images/rock.png").should("exist");
  });

  it("paper image should display", () => {
    cy.get("#1").click();
    cy.fixture("testing_images/paper.png").should("exist");
  });

  it("scissors image should display", () => {
    cy.get("#2").click();
    cy.fixture("testing_images/scissors.png").should("exist");
  });
});
