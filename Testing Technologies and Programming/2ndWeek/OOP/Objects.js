class Car {
  //  Class constructor
  constructor(make, model) {
    // variable
    this.make = make;
    this.model = model;
  }

  // Class method
  drive() {
    console.log("Vroom!");
  }
}

const myCar = new Car("Toyota", "C-HR");
console.log(myCar.make);
console.log(myCar.model);
// drive has already a console.log
myCar.drive();
