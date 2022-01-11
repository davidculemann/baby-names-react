describe("renders the homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders correctly", () => {
    cy.get("#app-title").should("exist");
  });

  it("allows to filter by female gender", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".gender-female-off").click();
    /* ==== End Cypress Studio ==== */
    cy.findByText("Aayan").should("not.exist");
    /* ==== Generated with Cypress Studio ==== */
  });

  it("allows to filter by male gender", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.gender-male-off').click();
    /* ==== End Cypress Studio ==== */
  });
});
