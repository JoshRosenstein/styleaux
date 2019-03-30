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

import { borderLeftColor } from '../borderLeftColor';

describe('borderLeftColor', () => {
  it('should return a function', () => {
    const result = borderLeftColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderLeftColor` as component and css prop', () => {
    const result = borderLeftColor()({ borderLeftColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderLeftColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeftColor<'a'>()({ borderLeftColor: 'a' });
    expect(toStyles(result)).toEqual({ borderLeftColor: 'a' });
  });

  it('should use an interface which marks `borderLeftColor` as optional', () => {
    const result = borderLeftColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderLeftColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderLeftColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderLeftColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeftColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderLeftColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderLeftColor: 'a',
      [MQ.D]: {
        borderLeftColor: 'b',
      },
      [MQ.T]: {
        borderLeftColor: 'c',
      },
      [MQ.M]: {
        borderLeftColor: 'd',
      },
    });
  });
});
