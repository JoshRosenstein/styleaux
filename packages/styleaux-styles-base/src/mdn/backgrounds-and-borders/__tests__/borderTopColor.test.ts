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

import { borderTopColor } from '../borderTopColor';

describe('borderTopColor', () => {
  it('should return a function', () => {
    const result = borderTopColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderTopColor` as component and css prop', () => {
    const result = borderTopColor()({ borderTopColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTopColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopColor<'a'>()({ borderTopColor: 'a' });
    expect(toStyles(result)).toEqual({ borderTopColor: 'a' });
  });

  it('should use an interface which marks `borderTopColor` as optional', () => {
    const result = borderTopColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderTopColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderTopColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTopColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderTopColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTopColor: 'a',
      [MQ.D]: {
        borderTopColor: 'b',
      },
      [MQ.T]: {
        borderTopColor: 'c',
      },
      [MQ.M]: {
        borderTopColor: 'd',
      },
    });
  });
});
