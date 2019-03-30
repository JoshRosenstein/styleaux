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

import { borderBlockEndWidth } from '../borderBlockEndWidth';

describe('borderBlockEndWidth', () => {
  it('should return a function', () => {
    const result = borderBlockEndWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEndWidth` as component and css prop', () => {
    const result = borderBlockEndWidth()({ borderBlockEndWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockEndWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEndWidth<'a'>()({ borderBlockEndWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockEndWidth: 'a' });
  });

  it('should use an interface which marks `borderBlockEndWidth` as optional', () => {
    const result = borderBlockEndWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlockEndWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockEndWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockEndWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEndWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockEndWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockEndWidth: 'a',
      [MQ.D]: {
        borderBlockEndWidth: 'b',
      },
      [MQ.T]: {
        borderBlockEndWidth: 'c',
      },
      [MQ.M]: {
        borderBlockEndWidth: 'd',
      },
    });
  });
});
