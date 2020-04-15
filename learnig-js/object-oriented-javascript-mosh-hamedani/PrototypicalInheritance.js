function Shape () {}

Shape.prototype.duplicate = () => {
  console.log('duplicate');
}

function Circle (radious) {
  this.radius = radious
}


Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function () {
  console.log('This is from draw method')
}

// console.log('xxx: ', xxx);
Circle.prototype.constructor = Circle

let shape = new Shape()
let circle = new Circle(1)

console.log('helllloooo', shape);
console.log('helllloooo', circle);
// circle.duplicate()