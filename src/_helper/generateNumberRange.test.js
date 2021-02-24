import generateNumberRange from './generateNumberRange';

test('Generates Number Range', () => {
  expect(generateNumberRange(3)).toEqual([100, 1000]);
});
