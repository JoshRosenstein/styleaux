import { createAnimationDirection } from '../animationDirection';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createAnimationDirection', () => {
  it('should return a function', () => {
    const result = createAnimationDirection();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createAnimationDirection` as component and css prop', () => {
    const result = createAnimationDirection()({
      animationDirection: 'inherit',
    });
    expect(toStyles(result)).toEqual({ animationDirection: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAnimationDirection<'a'>()({ animationDirection: 'a' });
    expect(toStyles(result)).toEqual({ animationDirection: 'a' });
  });

  it('should use an interface which marks `createAnimationDirection` as optional', () => {
    const result = createAnimationDirection<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createAnimationDirection<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ animationDirection: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationDirection: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAnimationDirection<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      animationDirection: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      animationDirection: 'a',
      [MQ.D]: {
        animationDirection: 'b',
      },
      [MQ.T]: {
        animationDirection: 'c',
      },
      [MQ.M]: {
        animationDirection: 'd',
      },
    });
  });
});
