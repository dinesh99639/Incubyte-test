const add = (numbers) => {
  if (numbers === "") {
    return 0;
  }

  const array = numbers.replace("\n", ",").split(",");

  return array.reduce((total, numString) => {
    return total + parseInt(numString.trim());
  }, 0);
};

module.exports = add;
