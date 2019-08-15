// Add your Circle class here

class Circle {

    constructor (radius) {
        this.radius = radius
    }

    get diameter (){
        return this.radius * 2
    }

    get circumference () {
        return this.diameter * Math.PI
    }

    get area () {
        return this.radius * this.radius * Math.PI
    }

    set diameter (length){
        this.radius = length / 2
    }

    set circumference (length) {
        this.radius = length/(2*Math.PI)
    }

    set area (area) {
        this.radius = Math.sqrt(area/Math.PI)
    }



}