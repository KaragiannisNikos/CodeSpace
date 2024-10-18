/*
      Activities

  Writing The First Tests 1

Visit this page (https://example.cypress.io).

Query for an element.

Interact with that element.

Assert about the content on the page.
*/

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");

    // Query for an element
    cy.get(".home-list").contains("Actions");

    // Interact with the element
    cy.get(".home-list").contains("Actions").click();

    // Assert about the content on the page
    cy.url().should("include", "/commands/actions");
    cy.get("h1").should("contain", "Actions");
  });
});

/*
  Writing The First Tests 2

Visit this page (https://example.cypress.io/commands/actions).

Query for the email input field.

Type your email address.

Assert about the content of the input field.
*/

describe("Cypress Example Test 2", () => {
  it("Visits the Cypress example page, type email address and assert input field content", () => {
    // Visit the page
    cy.visit("https://example.cypress.io/commands/actions");

    // Query for the email input field
    cy.get('input[type="email"]').as("emailInput");

    // Type your email address
    const emailAddress = "example@example.com";
    cy.get("@emailInput").type(emailAddress);

    // Assert about the content of the input field
    cy.get("@emailInput").should("have.value", emailAddress);
  });
});

/*
  Writing The First Tests 3

Write a test

Visit this page (https://example.cypress.io/commands/actions).

Query for the action button with a class ".action-btn" and click on it.

Query for the element with an id "#action-canvas" and click on it.

Query for the element with an id "#action-canvas" and click on the "topLeft".

Query for the element with an id "#action-canvas" and click on the "bottomRight".
*/

describe("Cypress Example Test 3", () => {
  it("Visits the Cypress example page and perform various actions on the specified elements", () => {
    // Visit the page
    cy.visit("https://example.cypress.io/commands/actions");

    // Query for the action button with the class ".action-btn" and click on it
    cy.get(".action-btn").click();

    // Query for the element with the id "#action-canvas" and click on it
    cy.get("#action-canvas").click();

    // Query for the element with the id "#action-canvas" and click on the "topLeft"
    cy.get("#action-canvas").click("topLeft");

    // Query for the element with the id "#action-canvas" and click on the "bottomRight"
    cy.get("#action-canvas").click("bottomRight");
  });
});
