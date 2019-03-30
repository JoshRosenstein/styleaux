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

import { borderBottomColor } from '../borderBottomColor';

describe('borderBottomColor', () => {
  it('should return a function', () => {
    const result = borderBottomColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBottomColor` as component and css prop', () => {
    const result = borderBottomColor()({ borderBottomColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottomColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomColor<'a'>()({ borderBottomColor: 'a' });
    expect(toStyles(result)).toEqual({ borderBottomColor: 'a' });
  });

  it('should use an interface which marks `borderBottomColor` as optional', () => {
    const result = borderBottomColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBottomColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottomColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottomColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBottomColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBottomColor: 'a',
      [MQ.D]: {
        borderBottomColor: 'b',
      },
      [MQ.T]: {
        borderBottomColor: 'c',
      },
      [MQ.M]: {
        borderBottomColor: 'd',
      },
    });
  });
});
