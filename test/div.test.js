const div = require('../src/div');

test("Check if it works", () => {
    expect(div(4, 2)).toBe(2)
})

test("Should throw an Error with division by 0", () => {
    expect(() => {
      div(56, 0);
    }).toThrow();
})
  


