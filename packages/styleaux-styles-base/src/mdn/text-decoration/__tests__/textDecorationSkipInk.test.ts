import { createTextDecorationSkipInk } from '../textDecorationSkipInk';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTextDecorationSkipInk', () => {
  it('should return a function', () => {
    const result = createTextDecorationSkipInk();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextDecorationSkipInk` as component and css prop', () => {
    const result = createTextDecorationSkipInk()({
      textDecorationSkipInk: 'inherit',
    });
    expect(toStyles(result)).toEqual({ textDecorationSkipInk: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextDecorationSkipInk<'a'>()({
      textDecorationSkipInk: 'a',
    });
    expect(toStyles(result)).toEqual({ textDecorationSkipInk: 'a' });
  });

  it('should use an interface which marks `createTextDecorationSkipInk` as optional', () => {
    const result = createTextDecorationSkipInk<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextDecorationSkipInk<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ textDecorationSkipInk: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textDecorationSkipInk: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextDecorationSkipInk<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textDecorationSkipInk: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textDecorationSkipInk: 'a',
      [MQ.D]: {
        textDecorationSkipInk: 'b',
      },
      [MQ.T]: {
        textDecorationSkipInk: 'c',
      },
      [MQ.M]: {
        textDecorationSkipInk: 'd',
      },
    });
  });
});
