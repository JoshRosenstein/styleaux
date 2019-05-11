import { createLetterSpacing } from '../letterSpacing';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createLetterSpacing', () => {
  it('should return a function', () => {
    const result = createLetterSpacing();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createLetterSpacing` as component and css prop', () => {
    const result = createLetterSpacing()({ letterSpacing: 'inherit' });
    expect(toStyles(result)).toEqual({ letterSpacing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createLetterSpacing<'a'>()({ letterSpacing: 'a' });
    expect(toStyles(result)).toEqual({ letterSpacing: 'a' });
  });

  it('should use an interface which marks `createLetterSpacing` as optional', () => {
    const result = createLetterSpacing<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createLetterSpacing<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ letterSpacing: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      letterSpacing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createLetterSpacing<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()(
      {
        letterSpacing: {
          all: 'a',
          D: 'b',
          T: 'c',
          M: 'd',
        },
        theme,
      },
    );
    expect(toStyles(result)).toEqual({
      letterSpacing: 'a',
      [MQ.D]: {
        letterSpacing: 'b',
      },
      [MQ.T]: {
        letterSpacing: 'c',
      },
      [MQ.M]: {
        letterSpacing: 'd',
      },
    });
  });
});
