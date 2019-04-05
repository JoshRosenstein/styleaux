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

import { createFontVariantEastAsian } from '../fontVariantEastAsian';

describe('fontVariantEastAsian', () => {
  it('should return a function', () => {
    const result = createFontVariantEastAsian();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontVariantEastAsian` as component and css prop', () => {
    const result = createFontVariantEastAsian()({ fontVariantEastAsian: 'inherit' });
    expect(toStyles(result)).toEqual({ fontVariantEastAsian: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontVariantEastAsian<'a'>()({ fontVariantEastAsian: 'a' });
    expect(toStyles(result)).toEqual({ fontVariantEastAsian: 'a' });
  });

  it('should use an interface which marks `fontVariantEastAsian` as optional', () => {
    const result = createFontVariantEastAsian<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createFontVariantEastAsian<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontVariantEastAsian: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariantEastAsian: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontVariantEastAsian<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontVariantEastAsian: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontVariantEastAsian: 'a',
      [MQ.D]: {
        fontVariantEastAsian: 'b',
      },
      [MQ.T]: {
        fontVariantEastAsian: 'c',
      },
      [MQ.M]: {
        fontVariantEastAsian: 'd',
      },
    });
  });
});
