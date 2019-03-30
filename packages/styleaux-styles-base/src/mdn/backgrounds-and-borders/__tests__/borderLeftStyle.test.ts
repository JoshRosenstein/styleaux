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

import { borderLeftStyle } from '../borderLeftStyle';

describe('borderLeftStyle', () => {
  it('should return a function', () => {
    const result = borderLeftStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderLeftStyle` as component and css prop', () => {
    const result = borderLeftStyle()({ borderLeftStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderLeftStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeftStyle<'a'>()({ borderLeftStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderLeftStyle: 'a' });
  });

  it('should use an interface which marks `borderLeftStyle` as optional', () => {
    const result = borderLeftStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderLeftStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderLeftStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderLeftStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeftStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderLeftStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderLeftStyle: 'a',
      [MQ.D]: {
        borderLeftStyle: 'b',
      },
      [MQ.T]: {
        borderLeftStyle: 'c',
      },
      [MQ.M]: {
        borderLeftStyle: 'd',
      },
    });
  });
});
