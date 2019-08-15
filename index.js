// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return this.diameter * 3.14;
  }
  get area() {
    return 3.14 * this.radius ** 2;
  }
  set diameter(num) {
    this.radius = num / 2;
  }
  set circumference(num) {
    this.radius = num / 3.14 / 2;
  }
}
