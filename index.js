// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  get countSides(){
    return this.sides.length;
  }
  get perimeter(){
    let sum= this.sides.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
)
return sum;
  }
}

class Triangle extends Polygon {
  constructor() {
    
  }
}