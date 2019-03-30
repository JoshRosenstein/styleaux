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

import { borderInlineStyle } from '../borderInlineStyle';

describe('borderInlineStyle', () => {
  it('should return a function', () => {
    const result = borderInlineStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStyle` as component and css prop', () => {
    const result = borderInlineStyle()({ borderInlineStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStyle<'a'>()({ borderInlineStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineStyle: 'a' });
  });

  it('should use an interface which marks `borderInlineStyle` as optional', () => {
    const result = borderInlineStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderInlineStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineStyle: 'a',
      [MQ.D]: {
        borderInlineStyle: 'b',
      },
      [MQ.T]: {
        borderInlineStyle: 'c',
      },
      [MQ.M]: {
        borderInlineStyle: 'd',
      },
    });
  });
});
