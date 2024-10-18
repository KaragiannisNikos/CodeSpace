//  JavaScript Solution

//  Pass the computer choice and my choice.
let computer_choice = Math.floor(Math.random() * 11);
let my_choice = prompt("Insert your choice: ");

//  Pass empty result, to return the right answer.
let result = "";

//  If operator, to return the appropriate answer.
if (my_choice == computer_choice) {
  console.log(`You answered ${my_choice}. This is the correct answer!`);
} else if (my_choice > computer_choice || my_choice < computer_choice) {
  console.log(
    `You answered ${my_choice}. The correct answer is ${computer_choice}.`
  );
}

//  Print the result with the correct answer.
console.log(result);
