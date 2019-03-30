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

import { textDecorationStyle } from '../textDecorationStyle';

describe('textDecorationStyle', () => {
  it('should return a function', () => {
    const result = textDecorationStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textDecorationStyle` as component and css prop', () => {
    const result = textDecorationStyle()({ textDecorationStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ textDecorationStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textDecorationStyle<'a'>()({ textDecorationStyle: 'a' });
    expect(toStyles(result)).toEqual({ textDecorationStyle: 'a' });
  });

  it('should use an interface which marks `textDecorationStyle` as optional', () => {
    const result = textDecorationStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textDecorationStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textDecorationStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textDecorationStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textDecorationStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textDecorationStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textDecorationStyle: 'a',
      [MQ.D]: {
        textDecorationStyle: 'b',
      },
      [MQ.T]: {
        textDecorationStyle: 'c',
      },
      [MQ.M]: {
        textDecorationStyle: 'd',
      },
    });
  });
});
