import { createFontVariantLigatures } from '../fontVariantLigatures';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createFontVariantLigatures', () => {
  it('should return a function', () => {
    const result = createFontVariantLigatures();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFontVariantLigatures` as component and css prop', () => {
    const result = createFontVariantLigatures()({
      fontVariantLigatures: 'inherit',
    });
    expect(toStyles(result)).toEqual({ fontVariantLigatures: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontVariantLigatures<'a'>()({
      fontVariantLigatures: 'a',
    });
    expect(toStyles(result)).toEqual({ fontVariantLigatures: 'a' });
  });

  it('should use an interface which marks `createFontVariantLigatures` as optional', () => {
    const result = createFontVariantLigatures<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFontVariantLigatures<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ fontVariantLigatures: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariantLigatures: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontVariantLigatures<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      fontVariantLigatures: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontVariantLigatures: 'a',
      [MQ.D]: {
        fontVariantLigatures: 'b',
      },
      [MQ.T]: {
        fontVariantLigatures: 'c',
      },
      [MQ.M]: {
        fontVariantLigatures: 'd',
      },
    });
  });
});
