const subtraction = require("./domain/subtraction");

test("subtract 10 - 5 to equal 5", () => {
  expect(subtraction(10, 5)).toBe(5);
});
