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

import { createBorderInlineStartStyle } from '../borderInlineStartStyle';

describe('borderInlineStartStyle', () => {
  it('should return a function', () => {
    const result = createBorderInlineStartStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStartStyle` as component and css prop', () => {
    const result = createBorderInlineStartStyle()({ borderInlineStartStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineStartStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineStartStyle<'a'>()({ borderInlineStartStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineStartStyle: 'a' });
  });

  it('should use an interface which marks `borderInlineStartStyle` as optional', () => {
    const result = createBorderInlineStartStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineStartStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineStartStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStartStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineStartStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineStartStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineStartStyle: 'a',
      [MQ.D]: {
        borderInlineStartStyle: 'b',
      },
      [MQ.T]: {
        borderInlineStartStyle: 'c',
      },
      [MQ.M]: {
        borderInlineStartStyle: 'd',
      },
    });
  });
});
