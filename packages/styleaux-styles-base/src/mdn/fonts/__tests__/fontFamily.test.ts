import { createFontFamily } from '../fontFamily';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createFontFamily', () => {
  it('should return a function', () => {
    const result = createFontFamily();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFontFamily` as component and css prop', () => {
    const result = createFontFamily()({ fontFamily: 'inherit' });
    expect(toStyles(result)).toEqual({ fontFamily: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontFamily<'a'>()({ fontFamily: 'a' });
    expect(toStyles(result)).toEqual({ fontFamily: 'a' });
  });

  it('should use an interface which marks `createFontFamily` as optional', () => {
    const result = createFontFamily<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFontFamily<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontFamily: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontFamily: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontFamily<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      fontFamily: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontFamily: 'a',
      [MQ.D]: {
        fontFamily: 'b',
      },
      [MQ.T]: {
        fontFamily: 'c',
      },
      [MQ.M]: {
        fontFamily: 'd',
      },
    });
  });
});
