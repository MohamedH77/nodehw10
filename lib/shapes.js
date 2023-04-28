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
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}



class Circle extends Shape {
    render(){
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render(){
        return `<rect x="60" y="10" width="30" height="30" fill="${this.color}"/>`
    }
}




module.exports = {
    Triangle, Square, Circle
}