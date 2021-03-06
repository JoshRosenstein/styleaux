import { createFontSizeAdjust } from '../fontSizeAdjust';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createFontSizeAdjust', () => {
  it('should return a function', () => {
    const result = createFontSizeAdjust();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFontSizeAdjust` as component and css prop', () => {
    const result = createFontSizeAdjust()({ fontSizeAdjust: 'inherit' });
    expect(toStyles(result)).toEqual({ fontSizeAdjust: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontSizeAdjust<'a'>()({ fontSizeAdjust: 'a' });
    expect(toStyles(result)).toEqual({ fontSizeAdjust: 'a' });
  });

  it('should use an interface which marks `createFontSizeAdjust` as optional', () => {
    const result = createFontSizeAdjust<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFontSizeAdjust<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ fontSizeAdjust: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontSizeAdjust: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontSizeAdjust<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      fontSizeAdjust: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontSizeAdjust: 'a',
      [MQ.D]: {
        fontSizeAdjust: 'b',
      },
      [MQ.T]: {
        fontSizeAdjust: 'c',
      },
      [MQ.M]: {
        fontSizeAdjust: 'd',
      },
    });
  });
});
