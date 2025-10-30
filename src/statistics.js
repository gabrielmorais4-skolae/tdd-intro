const statistics = {
  average(arrayOfNumbers) {
    if (arrayOfNumbers.length === 0) {
      return 0;
    }
    const sum = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
    return sum / arrayOfNumbers.length;
  },
};

module.exports = statistics;
