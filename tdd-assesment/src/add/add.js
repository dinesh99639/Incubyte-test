const add = (numbers) => {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  if (numbers.slice(0, 2) === "//") {
    const index = numbers.indexOf("\n");

    delimiter = numbers.slice(2, index + 1).trim();
    numbers = numbers.slice(index + 1);
  }

  const array = numbers.replaceAll("\n", delimiter).split(delimiter);

  return array.reduce((total, numString) => {
    const num = numString.trim();

    if (num[0] === "-") throw new Error("negative numbers not allowed " + num);

    return total + parseInt(num);
  }, 0);
};

module.exports = add;
