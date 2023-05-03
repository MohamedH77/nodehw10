class Shape{
    constructor(){
        this.color = null;
    }


    render(){
        return ``;
    }

    setColor(color){
        this.color = color
    }
}

// const newShape = new Shape()
// console.log(newShape.render()) // logs ""
// console.log(newShape.color) // logs null
// newShape.setColor("red")
// console.log(newShape.color) // logs "red"

class Triangle extends Shape {
    render(){
        return `<polygon points="49,29 13,86 85,86" fill="${this.color}" />`;
    }
}



class Circle extends Shape {
    render(){
        return `<circle cx="49" cy="74" r="45" stroke="white" stroke-width="4"  fill="${this.color}" />`;
    }
}
class Square extends Shape {
    render(){
        return `<polygon points="67,29 31,29 31,59 67,59" fill="${this.color}"/>`;
    }
}




module.exports = {
    Triangle, Square, Circle
}