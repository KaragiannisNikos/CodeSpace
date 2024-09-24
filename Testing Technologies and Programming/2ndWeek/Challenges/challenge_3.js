/*  Coding Task 3 - Inheritance 
(Subclass and Superclass)

In this task your are required to create an 
Admin class, which is a  child class of the 
User  class:

1. Create a  User class:
§ Add to the class a property with the name 
of username.

§ Create a setter method that can set the value 
of the username.


2. Create the Admin class that inherits the 
User class:
§ Add a method by the name of expressYourRole(), 
and make it return the string: "Admin".

§ Add to the Admin class another method, sayHello(), 
that returns the string "Hello admin, XXX" with 
the username instead of XXX.


3. Create an object admin out of the class Admin:
§ Set its name to "Balthazar" and say hello 
to the user.
*/
class User {
  constructor(username) {
    this._username = username;
  }
  // Getter
  get username() {
    return this._username;
  }

  //  Setter
  set username(newUsername) {
    this._username = newUsername;
  }
}

//  Create the Admin that inherits User
class Admin extends User {
  //  expressYourRole() method
  expressYourRole() {
    return "Admin";
  }

  // sayHello method
  sayHello() {
    return `Hello admin, ${this.username}`;
  }
}

//  Create the object admin
const admin = new Admin("Balthazar");

// print the result
console.log(admin.sayHello());
