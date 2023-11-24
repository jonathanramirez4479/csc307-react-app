const mySum = require('./mySum.js')

test('Testing mySum -- success', () => {

  const expected = 30;

  const result = mySum(12, 18);

  expect(expected).toBe(result);

});