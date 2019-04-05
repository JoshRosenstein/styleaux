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

import { createAlignItems } from '../alignItems';

describe('alignItems', () => {
  it('should return a function', () => {
    const result = createAlignItems();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `alignItems` as component and css prop', () => {
    const result = createAlignItems()({ alignItems: 'inherit' });
    expect(toStyles(result)).toEqual({ alignItems: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAlignItems<'a'>()({ alignItems: 'a' });
    expect(toStyles(result)).toEqual({ alignItems: 'a' });
  });

  it('should use an interface which marks `alignItems` as optional', () => {
    const result = createAlignItems<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createAlignItems<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ alignItems: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      alignItems: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAlignItems<
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
