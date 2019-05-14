import { getDefaultKey } from '../';

test('Set Can configure key lookups', () => {
  expect(
    getDefaultKey('media', 'all')({
      theme: { default: { media: 'base' } },
    }),
  ).toEqual('base');
});

test('Uses default Key if not configured', () => {
  expect(
    getDefaultKey('media', 'all')({
      theme: { default: { colors: 'base' } },
    }),
  ).toEqual('all');
});
