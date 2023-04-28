
class SVG{
    constructor(shape,text){
        this.shape = shape;
        this.text = text;
    }


    render(){
        return `<svg> ${this.shape} ${this.text}</svg>`;
    }
}


module.exports = SVG;