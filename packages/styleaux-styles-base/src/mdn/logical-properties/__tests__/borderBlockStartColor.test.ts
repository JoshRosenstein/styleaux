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

import { borderBlockStartColor } from '../borderBlockStartColor';

describe('borderBlockStartColor', () => {
  it('should return a function', () => {
    const result = borderBlockStartColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStartColor` as component and css prop', () => {
    const result = borderBlockStartColor()({ borderBlockStartColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockStartColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStartColor<'a'>()({ borderBlockStartColor: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockStartColor: 'a' });
  });

  it('should use an interface which marks `borderBlockStartColor` as optional', () => {
    const result = borderBlockStartColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlockStartColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockStartColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockStartColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStartColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockStartColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockStartColor: 'a',
      [MQ.D]: {
        borderBlockStartColor: 'b',
      },
      [MQ.T]: {
        borderBlockStartColor: 'c',
      },
      [MQ.M]: {
        borderBlockStartColor: 'd',
      },
    });
  });
});
