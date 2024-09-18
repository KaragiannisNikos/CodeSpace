//    Class Circle
class Circle {
  //  Class constructor
  constructor(radius) {
    this._radius = radius; //  _radius This way protect the original
  }

  //  Getter methods
  get radius() {
    return this._radius;
  }

  //  Setter methods
  set radius(radius) {
    this._radius = radius;
  }

  // Other methods
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}
// Create a new Circle object
const myCircle = new Circle(5);
console.log("Radius: ", myCircle.radius);
console.log("Area: ", myCircle.calculateArea());

// Change the radius using se method we have
myCircle.radius = 7;
console.log("New Radius: ", myCircle.radius());
console.log("New Area: ", myCircle.calculateArea());

// I can reuse and reuse this way.
