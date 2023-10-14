const myFunctions = require('./sample-functions.js');

test('Testing mySum -- success', () => {

  const expected = 30;

  const result = myFunctions.mySum(12, 18);

  expect(expected).toBe(result);

});

test('Testing myDiv -- success', () => {
    const expected = 1;

    const result = myFunctions.myDiv(5, 5);

    expect(expected).toBe(result);
});

test('Testing myDiv (divide by zero) -- false', () => {
    const expected = false;

    const result = myFunctions.myDiv(3, 0);
    
    expect(expected).toBe(result);
});

test('Testing myDiv (denom greater then numer -- decimal', () => {
    const expected = .25;
    const result = myFunctions.myDiv(1, 4);
    expect(expected).toBe(result);
})

test('Testing containsNumber -- success', () => {
    const expected = false;
    const result = myFunctions.containsNumbers("%%%");
    expect(expected).toBe(result);
})

