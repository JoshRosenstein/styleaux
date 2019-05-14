import { getThemeValue } from '../';

const colorGetter = getThemeValue('colors');
const spaceGetter = getThemeValue('space');
test('Basic', () => {
  const redColorGetter = colorGetter('red');
  const redColorGetterWithDefault = colorGetter('red', 'defaultRed');
  const e = redColorGetter({
    theme: { colors: { red: 'redColor' } },
  });

  expect(e).toEqual('redColor');
  expect(redColorGetter({})).toEqual(undefined);
  expect(redColorGetterWithDefault({})).toEqual('defaultRed');
});

test('Theme can be in a responsive form', () => {
  const getSpaceMd = spaceGetter('md', 'default md space value', 'md');
  const getSpaceSingle = spaceGetter('single');
  const getSpaceSingleWithMedia = spaceGetter('single', 'defaultValue', 'md');
  const props = {
    theme: {
      space: {
        single: 'singleValue',
        md: {
          sm: 'sm space value for md mediakey',
          md: 'md space value for md mediakey',
        },
      },
    },
  };
  const e = getSpaceMd(props);
  const e2 = getSpaceMd({
    theme: {},
  });
  const e3 = getSpaceSingle(props);
  const e4 = getSpaceSingleWithMedia(props);
  const e5 = getSpaceSingleWithMedia({});
  expect(e).toEqual('md space value for md mediakey');
  expect(e2).toEqual('default md space value');
  expect(e3).toEqual('singleValue');
  expect(e4).toEqual('singleValue');
  expect(e5).toEqual('defaultValue');
});
