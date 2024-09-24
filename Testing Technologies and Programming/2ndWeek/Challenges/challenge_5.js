/*  Coding Task 5 - Abstraction

In this task , we will create an abstract User 
class and two child classes (Admin and Viewer 
classes) that inherit from the abstract class.

1. Create an abstract class with the name of User: 

Add to the class, a property with the name of 
username. 
Add to the class, an abstract method with the name 
of stateYourRole().
Add to the class, the setter and getter methods to 
set and get the username.


2. Create an Admin class that inherits the User 
abstract class: 

Add to the class a method stateYourRole() and let 
it return the string "admin".


3. Create another class, Viewer that inherits the 
User abstract class: 

Add to the class a method stateYourRole() and let 
it return the string "viewer".


4. Create an object, admin, from the Admin class, 
set the username to "Balthazar", and make it return 
the string "admin".



5. Create an object, viewer, from the Viewer class, 
set the username to "Melchior", and make it return 
the string "viewer".
*/

//  Abstract class
class User {
  constructor(username) {
    if (this.constructor === User) {
      throw new TypeError("It is not Working!!");
    }
    this._username = username;
  }
  //  Abstract method
  stateYourRole() {
    return this._username;
  }

  //  Getter
  get username() {
    return this._username;
  }
  //  Setter
  set username(newUserName) {
    this._username = newUserName;
  }
}

//  Create Admin
class Admin extends User {
  stateYourRole() {
    return "admin: " + this._username;
  }
}

//  Create Viewer
class Viewer extends User {
  stateYourRole() {
    return "viewer: " + this._username;
  }
}

//  Create object admin
const admin = new Admin("Balthazar");

//  Print admin
console.log(admin.stateYourRole());

//  Create object viewer
const viewer = new Viewer("Melchior");

//  print viewer
console.log(viewer.stateYourRole());
