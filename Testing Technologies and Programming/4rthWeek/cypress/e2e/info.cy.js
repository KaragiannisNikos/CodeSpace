describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/challenges/RPS/index.html");

    //      Info contains

    //  User option
    cy.get("[data-cy=user-option]").contains("Your Option: ");

    //  Computer option
    cy.get("[data-cy=computer-option]").contains("Computer Option: ");

    //  Result
    cy.get("[data-cy=result]").contains("Result: ");
  });
});
