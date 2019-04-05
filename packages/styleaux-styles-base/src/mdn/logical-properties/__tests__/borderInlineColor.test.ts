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

import { createBorderInlineColor } from '../borderInlineColor';

describe('borderInlineColor', () => {
  it('should return a function', () => {
    const result = createBorderInlineColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineColor` as component and css prop', () => {
    const result = createBorderInlineColor()({ borderInlineColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineColor<'a'>()({ borderInlineColor: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineColor: 'a' });
  });

  it('should use an interface which marks `borderInlineColor` as optional', () => {
    const result = createBorderInlineColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineColor: 'a',
      [MQ.D]: {
        borderInlineColor: 'b',
      },
      [MQ.T]: {
        borderInlineColor: 'c',
      },
      [MQ.M]: {
        borderInlineColor: 'd',
      },
    });
  });
});
