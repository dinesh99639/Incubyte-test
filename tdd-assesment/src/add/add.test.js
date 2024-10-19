const add = require("./add");

describe("Add function", () => {
  test("Returns 0 if empty string is given", () => {
    expect(add("")).toBe(0);
  });

  test("Return sum if comma separated values are passed", () => {
    expect(add("1")).toBe(1);
  });

  test("Return sum even if new lines are present instead of commas", () => {
    expect(add("1 \n2, 3")).toBe(6);
    expect(add("1\n2 \n 3")).toBe(6);
  });

  test("Split the numbers based on the custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//;  \n1;2")).toBe(3);
    expect(add("// ;  \n 1 ; 2")).toBe(3);
  });

  test("Throws exception if the string contains negative numbers", () => {
    expect(() => add("1 \n2, -3")).toThrow("negative numbers not allowed -3");
    expect(() => add("-1 \n2, 3")).toThrow("negative numbers not allowed -1");
    expect(() => add("-1 \n2, -3")).toThrow(
      "negative numbers not allowed -1, -3"
    );
  });
});
