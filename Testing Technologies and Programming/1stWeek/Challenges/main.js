//      WEEK 1

//      ACTIVITY 1

/*Q1 
Write an arrow function expression called greet(). 
It should accept a single argument representing a person's name. 
It should return a greeting string as shown below:

greet("John"); //"Hi John!"
greet("James"); //"Hi James!"
*/
let greet = (name) => "Hi " + name + "!";

console.log(greet("John"));
console.log(greet("James"));

/*Q2 
Convert the function isEven() into an equivalent arrow function.

function isEven(num) {
  return num % 2 === 0;
}
*/
const isEven = (num) => num % 2 === 0;

console.log(isEven(4));

/*Q3 
Convert the following JavaScript function declaration to arrow function syntax:

function counterFunc(counter) {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }
  
  return counter;
}
*/
const counterFunc = (counter) => {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
};
console.log(counterFunc(20));

/*Q4 
Write an arrow function for the following JavaScript function:

function nameAge(name, age) {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
}
*/
const nameAge = (name, age) => {
  console.log("Hello " + name);

  console.log("You are " + age + " years old");
};
console.log(nameAge("nikos", 35));

/*Q5 
Write the arrow function for the following:

function printOnly() {
  console.log("printing");
}
*/
let printOnly = () => console.log("printing");

/*Q6 
Write the arrow function for the following:

function sum(num1, num2) {
    return num1 + num2
}
*/
let sum = (num1, num2) => num1 + num2;
console.log(sum(2, 2));

//      CHALLENGE 1

/*Coding Task 1
Write a function expression called reverseString().
 It should accept a single argument representing a person's name. 
 It should return a reverse string as shown below: 
 */

const reverseString = (name) => name.split("").reverse().join("");

console.log(reverseString("John"));
console.log(reverseString("James"));

/*Coding Task 2
Write a function expression called reverseArray(). 
It should accept an array as a single argument. 
It should return a reversed array and it should work for any data type.

reverseArray([1, 2, 3, 4, 5]);
reverseArray(["I", "like", "JavaScript"]);
*/

const reverseArray = (array) => array.reverse();

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["I", "like", "JavaScript"]));

/*      Coding Task 3
Write a function expression called mostExpensiveItem(). 
It should accept an array of items as a single argument. 
It should return the item that has the most cost tied up, calculated by the amount in stock * price.

Test Data

[
   { item: "irn bru", price: 3.25, stock: 50 },
   { item: "fanta", price: 3.98, stock: 45 },
   { item: "diet coke", price: 4.40, stock: 38 }, 
   { item: "7up", price: 3.99, stock: 42 }, 
] */
let items = [
  { item: "irn bru", price: 3.25, stock: 50 },
  { item: "fanta", price: 3.98, stock: 45 },
  { item: "diet coke", price: 4.4, stock: 38 },
  { item: "7up", price: 3.99, stock: 42 },
];

function mostExpensiveItem(items) {
  return items.reduce((accum, curr) =>
    curr.price * curr.stock > accum.price * accum.stock ? curr : accum
  );
}

console.log(mostExpensiveItem(items));
