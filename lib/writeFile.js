const fs = require('fs');
const SVG = require('./svg.js');
const {Triangle, Square, Circle} = require(`./shapes.js`)


// function createShape (shape,color) {
//     let shapeObject = null;

//     if (shape === "triangle") {
//         shapeObject = new Triangle()
        
//     }

//     if (shape === "square") {
//       shapeObject = new Square();
//     } 

//     if (shape === "circle") {
//       shapeObject = new Circle();
//     } 
//     shapeObject.setColor(color)

//     return shapeObject 
// }

function createDocument(shape, textColor, text) {
  // const shape = createShape(shape, data.shapeColor);
  const svgTemplate = new SVG(shape.render());
  svgTemplate.setText(text, textColor);
  return svgTemplate.render();
}



module.exports = {
    createDocument
}