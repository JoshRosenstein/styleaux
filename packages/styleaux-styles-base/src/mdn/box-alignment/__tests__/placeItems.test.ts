import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { createPlaceItems } from '../placeItems';

describe('placeItems', () => {
  it('should return a function', () => {
    const result = createPlaceItems();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `placeItems` as component and css prop', () => {
    const result = createPlaceItems()({ placeItems: 'inherit' });
    expect(toStyles(result)).toEqual({ placeItems: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPlaceItems<'a'>()({ placeItems: 'a' });
    expect(toStyles(result)).toEqual({ placeItems: 'a' });
  });

  it('should use an interface which marks `placeItems` as optional', () => {
    const result = createPlaceItems<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPlaceItems<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ placeItems: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      placeItems: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPlaceItems<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      placeItems: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      placeItems: 'a',
      [MQ.D]: {
        placeItems: 'b',
      },
      [MQ.T]: {
        placeItems: 'c',
      },
      [MQ.M]: {
        placeItems: 'd',
      },
    });
  });
});
