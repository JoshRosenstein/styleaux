import { createTextDecorationSkip } from '../textDecorationSkip';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTextDecorationSkip', () => {
  it('should return a function', () => {
    const result = createTextDecorationSkip();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextDecorationSkip` as component and css prop', () => {
    const result = createTextDecorationSkip()({
      textDecorationSkip: 'inherit',
    });
    expect(toStyles(result)).toEqual({ textDecorationSkip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextDecorationSkip<'a'>()({ textDecorationSkip: 'a' });
    expect(toStyles(result)).toEqual({ textDecorationSkip: 'a' });
  });

  it('should use an interface which marks `createTextDecorationSkip` as optional', () => {
    const result = createTextDecorationSkip<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextDecorationSkip<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ textDecorationSkip: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textDecorationSkip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextDecorationSkip<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textDecorationSkip: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textDecorationSkip: 'a',
      [MQ.D]: {
        textDecorationSkip: 'b',
      },
      [MQ.T]: {
        textDecorationSkip: 'c',
      },
      [MQ.M]: {
        textDecorationSkip: 'd',
      },
    });
  });
});
