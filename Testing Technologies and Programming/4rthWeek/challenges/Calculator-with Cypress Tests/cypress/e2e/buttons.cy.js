describe("Calculator functionality tests", () => {
  beforeEach(() => {
    // Visit the calculator page before each test
    cy.visit("http://127.0.0.1:5500/main.html");
  });
  it("checks if the buttons contains the right number", () => {
    // Click button "7"
    cy.get('input[value="7"]').click();
    // Check if the display shows "7"
    cy.get("#result").should("have.value", "7");
    // Click button "8"
    cy.get('input[value="8"]').click();
    // Check if the display shows "78"
    cy.get("#result").should("have.value", "78");
    // Click button "9"
    cy.get('input[value="9"]').click();
    // Check if the display shows "789"
    cy.get("#result").should("have.value", "789");
    // Click button "0"
    cy.get('input[value="0"]').click();
    // Check if the display shows "7890"
    cy.get("#result").should("have.value", "7890");
    // Click button "4"
    cy.get('input[value="4"]').click();
    // Check if the display shows "78904"
    cy.get("#result").should("have.value", "78904");
    // Click button "5"
    cy.get('input[value="5"]').click();
    // Check if the display shows "789045"
    cy.get("#result").should("have.value", "789045");
    // Click button "6"
    cy.get('input[value="6"]').click();
    // Check if the display shows "7890456"
    cy.get("#result").should("have.value", "7890456");
    // Click button "1"
    cy.get('input[value="1"]').click();
    // Check if the display shows "78904561"
    cy.get("#result").should("have.value", "78904561");
    // Click button "2"
    cy.get('input[value="2"]').click();
    // Check if the display shows "789045612"
    cy.get("#result").should("have.value", "789045612");
    // Click button "3"
    cy.get('input[value="3"]').click();
    // Check if the display shows "7890456123"
    cy.get("#result").should("have.value", "7890456123");
  });

  it('should clear the display when "C" button is clicked', () => {
    // Click button "7" and "C"
    cy.get('input[value="7"]').click();
    cy.get('input[value="C"]').click();
    // Check if the display is cleared
    cy.get("#result").should("have.value", "");
  });

  it("should toggle the sign of the number", () => {
    // Enter 5 and toggle sign
    cy.get('input[value="5"]').click();
    cy.get('input[value="+/-"]').click();

    // Verify the result is "-5"
    cy.get("#result").should("have.value", "-5");
  });

  it("should calculate addition correctly", () => {
    // Perform 7 + 3 = 10
    cy.get('input[value="7"]').click();
    cy.get('input[value="+"]').click();
    cy.get('input[value="3"]').click();
    cy.get('input[value="="]').click();

    // Verify the result is "10"
    cy.get("#result").should("have.value", "10");
  });

  it("should calculate subtraction correctly", () => {
    // Perform 9 - 4 = 5
    cy.get('input[value="9"]').click();
    cy.get('input[value="-"]').click();
    cy.get('input[value="4"]').click();
    cy.get('input[value="="]').click();

    // Verify the result is "5"
    cy.get("#result").should("have.value", "5");
  });

  it("should calculate multiplication correctly", () => {
    // Perform 6 * 3 = 18
    cy.get('input[value="6"]').click();
    cy.get('input[value="*"]').click();
    cy.get('input[value="3"]').click();
    cy.get('input[value="="]').click();

    // Verify the result is "18"
    cy.get("#result").should("have.value", "18");
  });

  it("should calculate division correctly", () => {
    // Perform 9 / 3 = 3
    cy.get('input[value="9"]').click();
    cy.get('input[value="/"]').click();
    cy.get('input[value="3"]').click();
    cy.get('input[value="="]').click();

    // Verify the result is "3"
    cy.get("#result").should("have.value", "3");
  });

  //  Returns error. percentage.js ss wrong.
  it("should calculate percentages correctly", () => {
    // Enter 50% and verify
    cy.get('input[value="5"]').click();
    cy.get('input[value="0"]').click();
    cy.get('input[value="%"]').click();

    // Verify the result (e.g., it might calculate 50% of the previous value or as 0.50)
    cy.get("#result").should("have.value", "0.5");
  });
});
