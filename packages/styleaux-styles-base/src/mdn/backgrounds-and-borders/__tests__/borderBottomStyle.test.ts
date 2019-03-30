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

import { borderBottomStyle } from '../borderBottomStyle';

describe('borderBottomStyle', () => {
  it('should return a function', () => {
    const result = borderBottomStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBottomStyle` as component and css prop', () => {
    const result = borderBottomStyle()({ borderBottomStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottomStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomStyle<'a'>()({ borderBottomStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderBottomStyle: 'a' });
  });

  it('should use an interface which marks `borderBottomStyle` as optional', () => {
    const result = borderBottomStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBottomStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottomStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottomStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBottomStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBottomStyle: 'a',
      [MQ.D]: {
        borderBottomStyle: 'b',
      },
      [MQ.T]: {
        borderBottomStyle: 'c',
      },
      [MQ.M]: {
        borderBottomStyle: 'd',
      },
    });
  });
});