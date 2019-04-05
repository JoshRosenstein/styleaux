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

import { createFontVariantCaps } from '../fontVariantCaps';

describe('fontVariantCaps', () => {
  it('should return a function', () => {
    const result = createFontVariantCaps();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontVariantCaps` as component and css prop', () => {
    const result = createFontVariantCaps()({ fontVariantCaps: 'inherit' });
    expect(toStyles(result)).toEqual({ fontVariantCaps: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontVariantCaps<'a'>()({ fontVariantCaps: 'a' });
    expect(toStyles(result)).toEqual({ fontVariantCaps: 'a' });
  });

  it('should use an interface which marks `fontVariantCaps` as optional', () => {
    const result = createFontVariantCaps<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createFontVariantCaps<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontVariantCaps: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariantCaps: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontVariantCaps<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontVariantCaps: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontVariantCaps: 'a',
      [MQ.D]: {
        fontVariantCaps: 'b',
      },
      [MQ.T]: {
        fontVariantCaps: 'c',
      },
      [MQ.M]: {
        fontVariantCaps: 'd',
      },
    });
  });
});
