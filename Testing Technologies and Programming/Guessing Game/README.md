        Guess the Number Game

This is a simple web-based game where the user guesses a number between 0 and 10. The computer generates a random number, and the user inputs their guess. The page then displays whether the user's guess is correct or not.

Features

User Input Validation: Ensures the user enters a valid number between 0 and 10 before submitting.

Random Computer Choice: The computer randomly selects a number between 0 and 10 each time the user plays.

Dynamic Feedback: The result of the game (whether the guess is correct or not) is displayed on the page.

Responsive Design: The page is styled using Bootstrap to ensure a clean, responsive design.

Technologies Used

HTML: To structure the content of the page.

CSS (Bootstrap): For responsive styling and layout.

JavaScript: For game logic and user input validation.

How to Run

Enter a number between 0 and 10 and click the "Submit" button.

The result will display on the page, showing whether your guess was correct.

Game Logic

The user enters a number between 0 and 10 in the input field.

Upon clicking the "Submit" button:

    If the input is empty or out of range, an error message will appear, asking the user to enter a valid number.

    If the input is valid, the game compares the user's input with a randomly generated number by the computer.

    If the numbers match, the user wins. Otherwise, the correct answer is shown.

Example

You enter 5 and press submit.

The computer generated the number 7.

The message on the page will display: "You answered 5. The correct answer is 7."
