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

import { borderBlockEndStyle } from '../borderBlockEndStyle';

describe('borderBlockEndStyle', () => {
  it('should return a function', () => {
    const result = borderBlockEndStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEndStyle` as component and css prop', () => {
    const result = borderBlockEndStyle()({ borderBlockEndStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockEndStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEndStyle<'a'>()({ borderBlockEndStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockEndStyle: 'a' });
  });

  it('should use an interface which marks `borderBlockEndStyle` as optional', () => {
    const result = borderBlockEndStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlockEndStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockEndStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockEndStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEndStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockEndStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockEndStyle: 'a',
      [MQ.D]: {
        borderBlockEndStyle: 'b',
      },
      [MQ.T]: {
        borderBlockEndStyle: 'c',
      },
      [MQ.M]: {
        borderBlockEndStyle: 'd',
      },
    });
  });
});
