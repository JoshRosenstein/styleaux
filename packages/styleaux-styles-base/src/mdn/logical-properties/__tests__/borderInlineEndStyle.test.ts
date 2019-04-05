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

import { createBorderInlineEndStyle } from '../borderInlineEndStyle';

describe('borderInlineEndStyle', () => {
  it('should return a function', () => {
    const result = createBorderInlineEndStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEndStyle` as component and css prop', () => {
    const result = createBorderInlineEndStyle()({ borderInlineEndStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineEndStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineEndStyle<'a'>()({ borderInlineEndStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineEndStyle: 'a' });
  });

  it('should use an interface which marks `borderInlineEndStyle` as optional', () => {
    const result = createBorderInlineEndStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineEndStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineEndStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineEndStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineEndStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineEndStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineEndStyle: 'a',
      [MQ.D]: {
        borderInlineEndStyle: 'b',
      },
      [MQ.T]: {
        borderInlineEndStyle: 'c',
      },
      [MQ.M]: {
        borderInlineEndStyle: 'd',
      },
    });
  });
});
