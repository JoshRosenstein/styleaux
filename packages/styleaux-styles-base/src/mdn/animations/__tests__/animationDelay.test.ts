import { createAnimationDelay } from '../animationDelay';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createAnimationDelay', () => {
  it('should return a function', () => {
    const result = createAnimationDelay();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createAnimationDelay` as component and css prop', () => {
    const result = createAnimationDelay()({ animationDelay: 'inherit' });
    expect(toStyles(result)).toEqual({ animationDelay: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAnimationDelay<'a'>()({ animationDelay: 'a' });
    expect(toStyles(result)).toEqual({ animationDelay: 'a' });
  });

  it('should use an interface which marks `createAnimationDelay` as optional', () => {
    const result = createAnimationDelay<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createAnimationDelay<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ animationDelay: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationDelay: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAnimationDelay<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      animationDelay: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      animationDelay: 'a',
      [MQ.D]: {
        animationDelay: 'b',
      },
      [MQ.T]: {
        animationDelay: 'c',
      },
      [MQ.M]: {
        animationDelay: 'd',
      },
    });
  });
});
