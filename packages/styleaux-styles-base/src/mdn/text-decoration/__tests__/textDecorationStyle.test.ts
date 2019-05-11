import { createTextDecorationStyle } from '../textDecorationStyle';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTextDecorationStyle', () => {
  it('should return a function', () => {
    const result = createTextDecorationStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextDecorationStyle` as component and css prop', () => {
    const result = createTextDecorationStyle()({
      textDecorationStyle: 'inherit',
    });
    expect(toStyles(result)).toEqual({ textDecorationStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextDecorationStyle<'a'>()({
      textDecorationStyle: 'a',
    });
    expect(toStyles(result)).toEqual({ textDecorationStyle: 'a' });
  });

  it('should use an interface which marks `createTextDecorationStyle` as optional', () => {
    const result = createTextDecorationStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextDecorationStyle<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ textDecorationStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textDecorationStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextDecorationStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textDecorationStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textDecorationStyle: 'a',
      [MQ.D]: {
        textDecorationStyle: 'b',
      },
      [MQ.T]: {
        textDecorationStyle: 'c',
      },
      [MQ.M]: {
        textDecorationStyle: 'd',
      },
    });
  });
});
