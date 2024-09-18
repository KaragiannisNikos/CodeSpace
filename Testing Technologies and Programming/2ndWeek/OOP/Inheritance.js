// Class Animal
class Animal {
  //  Class constructor
  constructor(name, colour) {
    this.name = name;
    this.colour = colour;
  }

  //  Methods
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Define a Dog class
class Dog extends Animal {
  //  class constructor
  constructor(name, colour, breed) {
    super(name, colour); // parent constructor
    this.breed = breed;
  }
  // Override the method
  speak() {
    console.log(`${this.name} barks...`);
  }
}

class Cat extends Animal {
  constructor(name, colour, breed, furr) {
    super(name, colour); // parent constructor
    this.breed = breed;
    this.furr = furr;
  }
  // Override the method
  speak() {
    console.log(`${this.name} meows...`);
  }
}

class Kiten extends Cat {
  // Override the method
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Create a Dog instance (object)
const myDog = new Dog("Alfie");
myDog.speak();

// Create a Cat instance (object)
const myCat = new Cat("Maverick");
myCat.speak();
