describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/challenges/RPS/index.html");

    //        BUTTONS

    //  Paper button
    //  Check if the paper button contains 'Paper' and has id = paper.
    cy.get("[data-cy=paper]").contains("Paper").should("have.id", "paper");

    //  Check if the paper button is working.
    cy.get("[data-cy=paper]").click();

    //  Rock button
    //  Check if the rock button contains 'Rock' and has id = rock.
    cy.get("[data-cy=rock]").contains("Rock").should("have.id", "rock");

    //  Check if the rock button is working.
    cy.get("[data-cy=rock]").click();

    //  Scissors button
    //  Check if the scissors button contains 'Scissors' and has id = scissors.
    cy.get("[data-cy=scissors]")
      .contains("Scissors")
      .should("have.id", "scissors");

    //  Check if the scissors button is working.
    cy.get("[data-cy=scissors]").click();
  });
});
