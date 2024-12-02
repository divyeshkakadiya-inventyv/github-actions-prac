// __tests__/app.test.js
const add = require('../app');

test('adds 1 + 2 to equal 3', () => {
    console.log(add(1, 2));
  expect(add(1, 2)).toBe(3);
});
