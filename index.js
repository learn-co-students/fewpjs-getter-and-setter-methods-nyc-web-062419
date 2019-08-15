class Circle{
  constructor(radius) {
    this.radius = radius
  }

  set diameter(diameter) {
    this.radius = diameter/2;
  }

  get diameter() {
  return this.diameter = this.radius * 2
  } 

  set circumference(circumference){
    this.radius =  circumference/(Math.PI * 2)
  }

  get circumference(){
    return Math.PI * this.diameter 
  }

  set area(area){
    this._area = area;    
  }

  get area(){
  return this.area = Math.PI * (this.radius * this.radius)
  }
  
  set circle(diameter){
    diameter._circle = circle;    
  }

  // get circle(){
  //   return circle = circle.diameter
  // }

}