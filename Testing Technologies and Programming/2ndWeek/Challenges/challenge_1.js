/*  Coding Task 1 - Classes and Objects

In this task your are required to create a 
user application.

Let's write a user class with the tools we have 
just acquired. This class will contain the 
first and  last name of each user and will be 
able to say hello to anyone who uses our application.
Instructions:

Write the class User and add the properties.
Add the method that says hello.
Create the first instance, and call it user1. 
Use the new keyword to create an object 
from the class.
Set the values for the first and last name to user1.

firstName = 'John'
lastName = 'Doe'


Get the user first and last name, and print 
it to the screen.
Use the hello() method with the first and last 
name variables in order to say hello to the user:

Expected result:
hello, John Doe


Add another object, call it user2, give it a 
first name of 'Jane' and last name of 'Doe', 
then say hello to the user.

Expected result:
hello, John Doe
hello, Jane Doe
*/

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //  Method
  hello() {
    console.log(`hello, ${this.firstName} ${this.lastName} `);
  }
}
//  Create a user
const user1 = new User("John", "Doe");

//  print user1
user1.hello();

//  Create a second user
const user2 = new User("Jane", "Doe");

//  print user2
user2.hello();
