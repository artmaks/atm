const assert = require('assert');
const { withdraw } = require('./dynamicSimple');

describe('ATM test', function () {
  it(`should work`, function () {
    const total = 1600;
    const coins = [1000, 1000, 500, 500, 100, 100, 100];
    const res = withdraw(total, coins);
    assert.deepEqual(res, [1000, 500, 100]);
  });

  it(`should return null (doesn't have coin 1)`, function () {
    const total = 1601;
    const coins = [1000, 1000, 500, 500, 100, 100, 100];
    const res = withdraw(total, coins);
    assert.deepEqual(res, null);
  });

  it(`should work`, function () {
    const total = 600;
    const coins = [500, 200, 200, 200];
    const res = withdraw(total, coins);
    assert.deepEqual(res, [200, 200, 200]);
  });
});
