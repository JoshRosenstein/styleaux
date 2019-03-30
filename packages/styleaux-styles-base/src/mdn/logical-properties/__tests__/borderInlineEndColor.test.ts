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

import { borderInlineEndColor } from '../borderInlineEndColor';

describe('borderInlineEndColor', () => {
  it('should return a function', () => {
    const result = borderInlineEndColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEndColor` as component and css prop', () => {
    const result = borderInlineEndColor()({ borderInlineEndColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineEndColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineEndColor<'a'>()({ borderInlineEndColor: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineEndColor: 'a' });
  });

  it('should use an interface which marks `borderInlineEndColor` as optional', () => {
    const result = borderInlineEndColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderInlineEndColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineEndColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineEndColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineEndColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineEndColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineEndColor: 'a',
      [MQ.D]: {
        borderInlineEndColor: 'b',
      },
      [MQ.T]: {
        borderInlineEndColor: 'c',
      },
      [MQ.M]: {
        borderInlineEndColor: 'd',
      },
    });
  });
});
