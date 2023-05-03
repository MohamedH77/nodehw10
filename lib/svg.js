
class SVG{
    constructor(shape){
        this.shape = shape;
        this.text = ``;
    }

    setText(text, textColor){
        this.text = `<text font-size="31" x="25" y="81" fill = "${textColor}">${text}</text>`;
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shape} ${this.text}</svg>`;
    }

}


module.exports = SVG;