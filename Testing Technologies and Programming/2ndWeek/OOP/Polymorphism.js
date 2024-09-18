class Shape {
  //  @Override Method
  area() {
    console.log("Area calculation not to be plemented...");
  }
}

// Class Square
class Square extends Shape {
  constructor(side) {
    //  Call super class constractor
    super();
    this.side = side;
  }

  // @Override
  area() {
    return this.side ** 2;
  }
}

// Class Circle
class Circle extends Shape {
  constructor(radius) {
    //  Call super class constractor
    super();
    this.radius = radius;
  }

  // @Override
  area() {
    return Math.PI * this.radius ** 2;
  }
}

//  Create the instances of the classes
const shape = new Shape();
const square = new Square(2);
const circle = new Circle(4);

//  Calculate the areas and print the result
shape.area();
console.log("Square area: ", square.area());
console.log("Sircle area: ", circle.area());
