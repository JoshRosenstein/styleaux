import { getDefaultMediaKey } from '../';

test('Gets default media key from theme.default', () => {
  expect(
    getDefaultMediaKey({
      theme: { default: { media: 'base' } },
    }),
  ).toEqual('base');
});

test('Fallsback to all', () => {
  expect(
    getDefaultMediaKey({
      theme: {},
    }),
  ).toEqual('all');
});
