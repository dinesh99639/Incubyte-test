const getDelimiter = (numbers) => {
  let delimiter = ",";

  if (numbers.slice(0, 2) === "//") {
    const index = numbers.indexOf("\n");

    delimiter = numbers.slice(2, index + 1).trim();
    numbers = numbers.slice(index + 1);
  }

  return [delimiter, numbers];
};

const add = (numbers) => {
  if (numbers === "") {
    return 0;
  }

  const negatives = [];
  let delimiter;

  [delimiter, numbers] = getDelimiter(numbers);

  const array = numbers.replaceAll("\n", delimiter).split(delimiter);
  const res = array.reduce((total, numString) => {
    const num = numString.trim();

    if (num[0] === "-") {
      negatives.push(num);
    }

    return total + parseInt(num);
  }, 0);

  if (negatives.length) {
    throw new Error("negative numbers not allowed " + negatives.join(", "));
  }

  return res;
};

module.exports = add;
