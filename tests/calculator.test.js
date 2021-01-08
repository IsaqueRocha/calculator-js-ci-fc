const { add, sub, times, div, mod } = require('../src/calculator');

describe('calculator tests', () => {
  test('should add two numbers', () => {
    expect(add(1, 1)).toBe(2);
  });

  test('should sub two numbers', () => {
    expect(sub(1, 1)).toBe(0);
  });

  test('should multiply two numbers', () => {
    expect(times(10, 2)).toBe(20);
  });

  test('should divide two numbers', () => {
    expect(div(10, 2)).toBe(5);
  });

  test('should get the mod of a division of two numbers', () => {
    expect(mod(10, 2)).toBe(0);
  });
});
