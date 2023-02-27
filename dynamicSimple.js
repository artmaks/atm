const withdraw = (total, _coins) => {
  coins = [..._coins].sort((a, b) => b - a);

  // Основная таблица
  // key - сумма
  // value - массив купюр
  let sums = {0: []};

  // Итератор от 1 до N купюр
  for (key in coins) {
    const val = coins[key]; // Стоимость купюры
    const newSums = {}; // Временная таблица

    // Итератор по элементам основной таблицы
    for ([key, values] of Object.entries(sums)) {
      const newKey = parseInt(key) + val; // Новая стоимость
      newSums[newKey] = [...values, val]; // Новый набор купюр
    }

    sums = {
      ...newSums,
      ...sums, // приоритет у главной таблицы
    };
  }

  return sums[total] || null;
};

module.exports = { withdraw };
