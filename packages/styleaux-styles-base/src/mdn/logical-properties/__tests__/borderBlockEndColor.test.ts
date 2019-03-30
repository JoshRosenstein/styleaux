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

import { borderBlockEndColor } from '../borderBlockEndColor';

describe('borderBlockEndColor', () => {
  it('should return a function', () => {
    const result = borderBlockEndColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEndColor` as component and css prop', () => {
    const result = borderBlockEndColor()({ borderBlockEndColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockEndColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEndColor<'a'>()({ borderBlockEndColor: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockEndColor: 'a' });
  });

  it('should use an interface which marks `borderBlockEndColor` as optional', () => {
    const result = borderBlockEndColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlockEndColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockEndColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockEndColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEndColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockEndColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockEndColor: 'a',
      [MQ.D]: {
        borderBlockEndColor: 'b',
      },
      [MQ.T]: {
        borderBlockEndColor: 'c',
      },
      [MQ.M]: {
        borderBlockEndColor: 'd',
      },
    });
  });
});
