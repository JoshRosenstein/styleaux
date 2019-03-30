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

import { borderInlineStartStyle } from '../borderInlineStartStyle';

describe('borderInlineStartStyle', () => {
  it('should return a function', () => {
    const result = borderInlineStartStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStartStyle` as component and css prop', () => {
    const result = borderInlineStartStyle()({ borderInlineStartStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineStartStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStartStyle<'a'>()({ borderInlineStartStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineStartStyle: 'a' });
  });

  it('should use an interface which marks `borderInlineStartStyle` as optional', () => {
    const result = borderInlineStartStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderInlineStartStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineStartStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStartStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStartStyle<
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
