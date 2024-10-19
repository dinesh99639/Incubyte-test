const add = (numbers) => {
  if (numbers === "") {
    return 0;
  }

  const array = numbers.split(",");

  return array.reduce((total, numString) => total + parseInt(numString), 0);
};

module.exports = add;
