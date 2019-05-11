import { toStyles } from '../__testUtils__';
import { backgroundColor, color, textColor } from '../index';

test('backgroundColor', () => {
  expect(backgroundColor({ bg: 'lightpink' })).toEqual([
    { backgroundColor: 'lightpink' },
  ]);
});

test('textColor', () => {
  expect(textColor({ color: 'magenta' })).toEqual([{ color: 'magenta' }]);
});
test('color', () => {
  expect(toStyles(color({ bg: 'lightpink', color: 'maroon' }))).toEqual({
    backgroundColor: 'lightpink',
    color: 'maroon',
  });
});
