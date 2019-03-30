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

import { borderTopStyle } from '../borderTopStyle';

describe('borderTopStyle', () => {
  it('should return a function', () => {
    const result = borderTopStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderTopStyle` as component and css prop', () => {
    const result = borderTopStyle()({ borderTopStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTopStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopStyle<'a'>()({ borderTopStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderTopStyle: 'a' });
  });

  it('should use an interface which marks `borderTopStyle` as optional', () => {
    const result = borderTopStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderTopStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderTopStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTopStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderTopStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTopStyle: 'a',
      [MQ.D]: {
        borderTopStyle: 'b',
      },
      [MQ.T]: {
        borderTopStyle: 'c',
      },
      [MQ.M]: {
        borderTopStyle: 'd',
      },
    });
  });
});
