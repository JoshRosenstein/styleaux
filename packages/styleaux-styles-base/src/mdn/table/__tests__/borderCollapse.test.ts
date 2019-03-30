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

import { borderCollapse } from '../borderCollapse';

describe('borderCollapse', () => {
  it('should return a function', () => {
    const result = borderCollapse();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderCollapse` as component and css prop', () => {
    const result = borderCollapse()({ borderCollapse: 'inherit' });
    expect(toStyles(result)).toEqual({ borderCollapse: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderCollapse<'a'>()({ borderCollapse: 'a' });
    expect(toStyles(result)).toEqual({ borderCollapse: 'a' });
  });

  it('should use an interface which marks `borderCollapse` as optional', () => {
    const result = borderCollapse<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderCollapse<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderCollapse: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderCollapse: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderCollapse<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderCollapse: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderCollapse: 'a',
      [MQ.D]: {
        borderCollapse: 'b',
      },
      [MQ.T]: {
        borderCollapse: 'c',
      },
      [MQ.M]: {
        borderCollapse: 'd',
      },
    });
  });
});
