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

import { alignItems } from '../alignItems';

describe('alignItems', () => {
  it('should return a function', () => {
    const result = alignItems();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `alignItems` as component and css prop', () => {
    const result = alignItems()({ alignItems: 'inherit' });
    expect(toStyles(result)).toEqual({ alignItems: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = alignItems<'a'>()({ alignItems: 'a' });
    expect(toStyles(result)).toEqual({ alignItems: 'a' });
  });

  it('should use an interface which marks `alignItems` as optional', () => {
    const result = alignItems<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = alignItems<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ alignItems: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      alignItems: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = alignItems<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      alignItems: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      alignItems: 'a',
      [MQ.D]: {
        alignItems: 'b',
      },
      [MQ.T]: {
        alignItems: 'c',
      },
      [MQ.M]: {
        alignItems: 'd',
      },
    });
  });
});
