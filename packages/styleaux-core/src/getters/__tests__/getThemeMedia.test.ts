import { getThemeMedia } from '../getThemeMedia';

test('Gets media value for object without all', () => {
  expect(
    getThemeMedia({
      theme: { media: { sm: 1, md: 2 } },
    }),
  ).toEqual({ all: null, md: 2, sm: 1 });
});

test('Gets media value for object with all', () => {
  expect(
    getThemeMedia({
      theme: { media: { all: 0, sm: 1, md: 2 } },
    }),
  ).toEqual({ all: 0, md: 2, sm: 1 });
});

test('Gets media value for array media', () => {
  expect(
    getThemeMedia({
      theme: { media: [1, 2] },
    }),
  ).toEqual({ '0': null, '1': 1, '2': 2 });
});
