let pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    set diameter(newDiameter){
        return this.radius = newDiameter / 2
    }
    get diameter(){
        return this.radius * 2
    }
    set circumference(newCircumference){
        this.radius = newCircumference / (pi * 2)
    }
    get circumference(){
        return pi * this.diameter
    }
    get area(){
        return pi * (this.radius * this.radius)
    }
}