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
get isValid(){
  let side1 = this.sides[0]
   let side2 = this.sides[1]
   let side3 = this.sides[2]

   if (side1 + side2 > side3 && side1+side3>side2 && side2+side3>side1){
     return true
   }else{
     return false
   }

}
}
