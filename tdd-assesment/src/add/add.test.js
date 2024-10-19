const add = require("./add");

test("Returns 0 if empty string is given", () => {
  expect(add("")).toBe(0);
});
