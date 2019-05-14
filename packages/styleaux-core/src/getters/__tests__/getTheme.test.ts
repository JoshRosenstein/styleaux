import { getTheme } from '../';
import { wrapTheme } from '../../__testutils__';
test('Gets themeProp', () => {
  expect(getTheme(wrapTheme({ a: 1 }))).toEqual({ a: 1 });
});
