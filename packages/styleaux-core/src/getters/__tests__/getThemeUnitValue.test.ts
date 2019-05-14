import { getUnitValue } from '../getUnitValue';

test('works', () => {
  expect(getUnitValue('a')({ a: 1 })).toEqual(1);
});

test('negative value', () => {
  expect(getUnitValue('-a')({ a: 1 })).toEqual(-1);
});

test('works with fallback lookup', () => {
  expect(getUnitValue('a', { a: 1 })({ aa: 1 })).toEqual(1);
});

test('negative value with fallback lookup', () => {
  expect(getUnitValue('-a', { a: 1 })({ aa: 1 })).toEqual(-1);
});

test('[Arrays] works', () => {
  expect(getUnitValue(1)([1, 2])).toEqual(2);
});

test('[Arrays] works negative value', () => {
  expect(getUnitValue(-1)([1, 2])).toEqual(-2);
});

test('[Arrays] works with fallback lookup', () => {
  expect(getUnitValue(1, [1, 2])([])).toEqual(2);
});

test('[Arrays] negative value with fallback lookup', () => {
  expect(getUnitValue(-1, [1, 2])([])).toEqual(-2);
});

test(' fallback value', () => {
  expect(getUnitValue(-1, 'this')([])).toEqual('this');
});
