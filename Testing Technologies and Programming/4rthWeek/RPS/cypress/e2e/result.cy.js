describe("RPS testing", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    //    Result Options

    //  When user wins
    //  with paper
    cy.get("[data-cy=paper]").click();
    cy.get("#computer-option").invoke("text", "Rock");
    cy.get("#result").should("have.text", "You Win!");

    //  with scissors
    cy.get("[data-cy=scissors]").click();
    cy.get("#computer-option").invoke("text", "Paper");
    cy.get("#result").contains("You Win!");

    //  with rock
    cy.get("[data-cy=rock]").click();
    cy.get("#computer-option").invoke("text", "Scissors");
    cy.get("#result").contains("You Win!");

    //  When computer wins
    //  with scissors
    cy.get("[data-cy=paper]").click();
    cy.get("#computer-option").invoke("text", "Scissors");
    cy.get("#result").contains("You Lose!");

    //  with paper
    cy.get("[data-cy=rock]").click();
    cy.get("#computer-option").invoke("text", "Paper");
    cy.get("#result").contains("You Lose!");

    //  with rock
    cy.get("[data-cy=scissors]").click();
    cy.get("#computer-option").invoke("text", "Rock");
    cy.get("resultSpan").contains("You Lose!");
  });
});
