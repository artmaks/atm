const withdraw = (total, _coins) => {
  coins = [..._coins].sort((a, b) => b - a);

  if (total % coins[coins.length - 1] !== 0) {
    return null;
  }

  let sums = {0: 0};

  for (key in coins) {
    const val = coins[key];
    const newSums = {};
    for ([key, sum] of Object.entries(sums)) {
      const newKey = parseInt(key) + val;
      newSums[newKey] = val;
    }

    sums = {
      ...newSums,
      ...sums,
    };
  }

  let remain = total;
  const res = [];

  while(remain > 0) {
    res.push(sums[remain]);
    remain -= sums[remain];
  }

  return res.reverse();
};

module.exports = { withdraw };


// [500, 200, 200, 200]

// {
//   0: 0,
//   200: 200,
//   400: 200,
//   500: 500,
//   600: 200,
//   700: 200,
//   900: 200,
//   1100: 200,
// }
