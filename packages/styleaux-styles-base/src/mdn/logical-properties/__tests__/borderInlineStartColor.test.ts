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

import { createBorderInlineStartColor } from '../borderInlineStartColor';

describe('borderInlineStartColor', () => {
  it('should return a function', () => {
    const result = createBorderInlineStartColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStartColor` as component and css prop', () => {
    const result = createBorderInlineStartColor()({ borderInlineStartColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineStartColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineStartColor<'a'>()({ borderInlineStartColor: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineStartColor: 'a' });
  });

  it('should use an interface which marks `borderInlineStartColor` as optional', () => {
    const result = createBorderInlineStartColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineStartColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineStartColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStartColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineStartColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineStartColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineStartColor: 'a',
      [MQ.D]: {
        borderInlineStartColor: 'b',
      },
      [MQ.T]: {
        borderInlineStartColor: 'c',
      },
      [MQ.M]: {
        borderInlineStartColor: 'd',
      },
    });
  });
});
