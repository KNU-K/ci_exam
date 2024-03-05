const { add } = require("../func");

test("add function test", () => {
  expect(add(1, 2)).toBe(5);
});
