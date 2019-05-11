import { createFontVariantNumeric } from '../fontVariantNumeric';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createFontVariantNumeric', () => {
  it('should return a function', () => {
    const result = createFontVariantNumeric();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFontVariantNumeric` as component and css prop', () => {
    const result = createFontVariantNumeric()({
      fontVariantNumeric: 'inherit',
    });
    expect(toStyles(result)).toEqual({ fontVariantNumeric: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontVariantNumeric<'a'>()({ fontVariantNumeric: 'a' });
    expect(toStyles(result)).toEqual({ fontVariantNumeric: 'a' });
  });

  it('should use an interface which marks `createFontVariantNumeric` as optional', () => {
    const result = createFontVariantNumeric<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFontVariantNumeric<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ fontVariantNumeric: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariantNumeric: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontVariantNumeric<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      fontVariantNumeric: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontVariantNumeric: 'a',
      [MQ.D]: {
        fontVariantNumeric: 'b',
      },
      [MQ.T]: {
        fontVariantNumeric: 'c',
      },
      [MQ.M]: {
        fontVariantNumeric: 'd',
      },
    });
  });
});
