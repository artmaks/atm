const withdraw = (total, _coins) => {
  // Сортируем купюры
  coins = _coins.slice().sort((a, b) => b - a);

  let res = [];
  let balance = total;

  // Итератор по всем купюрам
  for (let i = 0; i < coins.length; i++) {
    // Если купюра больше нужной суммы – пропускаем
    if (coins[i] > balance) continue;

    res.push(coins[i]); // Записываем купюру в результат
    balance -= coins[i]; // Обновляем остаток

    // Если остаток равен нулю – решение найдено
    if (balance === 0) {
      return res;
    };
  }

  return null;
};

module.exports = { withdraw };
