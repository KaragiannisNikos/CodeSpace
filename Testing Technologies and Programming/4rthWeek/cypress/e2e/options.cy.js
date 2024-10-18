describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/challenges/RPS/index.html");

    //      User Options
    //  Check when I press Rock button display on the user option.
    cy.get("[data-cy=rock]").click();
    cy.get("#user-option").contains("Rock");

    //  Check when I press Paper button display on the user option.
    cy.get("[data-cy=paper]").click();
    cy.get("#user-option").contains("Paper");

    //  Check when I press Scissors button display on the user option.
    cy.get("[data-cy=scissors]").click();
    cy.get("#user-option").contains("Scissors");

    //    Computer Options
    //  Check when the computer choose Rock appears on the computer option.
    cy.get("[data-cy=rock]").click();
    cy.get("#computer-option").invoke("text", "Rock");
    cy.get("#computer-option").contains("Rock");

    //  Check when the computer choose Paper appears on the computer option.
    cy.get("[data-cy=rock]").click();
    cy.get("#computer-option").invoke("text", "Paper");
    cy.get("#computer-option").contains("Paper");

    //  Check when the computer choose Scissors appears on the computer option.
    cy.get("[data-cy=rock]").click();
    cy.get("#computer-option").invoke("text", "Scissors");
    cy.get("#computer-option").contains("Scissors");
  });
});
