const assert = require('assert');
const { withdraw } = require('./index');

describe('Basic ATM test', function () {
  it(`should return value`, function () {
    const total = 1600;
    const banknotes = [1000, 1000, 500, 500, 100, 100, 100];
    const res = withdraw(total, banknotes);
    assert.deepEqual(res, [1000, 500, 100]);
  });
});
