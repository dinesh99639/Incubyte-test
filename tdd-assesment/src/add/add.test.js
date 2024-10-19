const add = require("./add");

describe("Add function", () => {
  test("Returns 0 if empty string is given", () => {
    expect(add("")).toBe(0);
  });

  test("Return sum if comma separated values are passed", () => {
    expect(add("1")).toBe(1);
    expect(add("1,5")).toBe(6);
  });
});
