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

import { borderBlockColor } from '../borderBlockColor';

describe('borderBlockColor', () => {
  it('should return a function', () => {
    const result = borderBlockColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockColor` as component and css prop', () => {
    const result = borderBlockColor()({ borderBlockColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockColor<'a'>()({ borderBlockColor: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockColor: 'a' });
  });

  it('should use an interface which marks `borderBlockColor` as optional', () => {
    const result = borderBlockColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlockColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockColor: 'a',
      [MQ.D]: {
        borderBlockColor: 'b',
      },
      [MQ.T]: {
        borderBlockColor: 'c',
      },
      [MQ.M]: {
        borderBlockColor: 'd',
      },
    });
  });
});
