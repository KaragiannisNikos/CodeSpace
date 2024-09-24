/*  Coding Task 2 - Encapsulation

In this task you will extend the previous 
one with the help of some guiding topics.

Your 'User' class should look like this:

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  hello() {
    return "hello";
  }  
}
Get and Set Methods 

Add the class constructor.
Add the getters and setters methods after the 
class constructor.
Change your hello() method to return 'Hello World!'.
Add the following:
1. Create an user object called user that will 
represent the User class.
2. Use the setters methods to set the firstName 
and lastName instance variables of your user object.
3. Use getters methods to retrieve the firstName 
and lastName Strings from the user object and add a 
blank space in between.

Your program output should now look like this:

Hello World!
My name is firstName lastSurname
*/
class User {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  //  Getter for firstName
  get firstName() {
    return this._firstName;
  }
  //  Setter for firstName
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  //  Getter for lastName
  get lastName() {
    return this._lastName;
  }
  //  Setter for lastName
  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  //  hello method
  hello() {
    return "Hello World!";
  }

  // Return the user's full name
  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}

//    Create a user
const user = new User("John", "Doe");

//  Print the result
console.log(user.hello());
console.log(user.getFullName());

//    Create and print a user2
const user2 = new User("Jane", "Doe");

console.log(user2.getFullName());
