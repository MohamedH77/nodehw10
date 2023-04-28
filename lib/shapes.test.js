const shape = require("./shapes.js");


describe('shape', () => {
    describe(`Triangle class should render with default color`, () => {
      it(`should render a triangle with default color`, () => {
        const shape = new Triangle();
        shape.setColor("");
        expect(shape.render()).toEqual(
          '<polygon points="150, 18 244, 182 56, 182" fill="" />'
        );
      });
    });
})


