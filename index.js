const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');

const { createDocument } = require('./lib/writeFile');
const { Circle } = require('./lib/shapes');
const { Triangle } = require('./lib/shapes');
const { Square } = require('./lib/shapes');

const SHAPES = ['circle', 'triangle', 'square'];

async function run() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "SVG",
      message: "Enter up to three characters:",
      validate: (input) =>
        input.length <= 3 || "Please enter up to three characters",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color or a Hex# for text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: SHAPES,
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color or a Hex# for shape color",
    },
  ]);
  let shape 
  if (answers.shape === "circle") {
    shape = new Circle();
  }
  else if (answers.shape === "triangle") {
    shape = new Triangle();
  } 
  else if (answers.shape === "square") {
    shape = new Square();
  }

  shape.setColor(answers.shapeColor)

  const svg = createDocument(shape, answers.textColor, answers.SVG);
  await writeFile("logo.svg", svg);

  console.log("Generated logo.svg");
}


run();
