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

import { borderRightColor } from '../borderRightColor';

describe('borderRightColor', () => {
  it('should return a function', () => {
    const result = borderRightColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderRightColor` as component and css prop', () => {
    const result = borderRightColor()({ borderRightColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderRightColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRightColor<'a'>()({ borderRightColor: 'a' });
    expect(toStyles(result)).toEqual({ borderRightColor: 'a' });
  });

  it('should use an interface which marks `borderRightColor` as optional', () => {
    const result = borderRightColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderRightColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderRightColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderRightColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRightColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderRightColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderRightColor: 'a',
      [MQ.D]: {
        borderRightColor: 'b',
      },
      [MQ.T]: {
        borderRightColor: 'c',
      },
      [MQ.M]: {
        borderRightColor: 'd',
      },
    });
  });
});
