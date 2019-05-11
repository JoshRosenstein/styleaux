import { createAnimationTimingFunction } from '../animationTimingFunction';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createAnimationTimingFunction', () => {
  it('should return a function', () => {
    const result = createAnimationTimingFunction();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createAnimationTimingFunction` as component and css prop', () => {
    const result = createAnimationTimingFunction()({
      animationTimingFunction: 'inherit',
    });
    expect(toStyles(result)).toEqual({ animationTimingFunction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAnimationTimingFunction<'a'>()({
      animationTimingFunction: 'a',
    });
    expect(toStyles(result)).toEqual({ animationTimingFunction: 'a' });
  });

  it('should use an interface which marks `createAnimationTimingFunction` as optional', () => {
    const result = createAnimationTimingFunction<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createAnimationTimingFunction<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ animationTimingFunction: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationTimingFunction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAnimationTimingFunction<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      animationTimingFunction: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      animationTimingFunction: 'a',
      [MQ.D]: {
        animationTimingFunction: 'b',
      },
      [MQ.T]: {
        animationTimingFunction: 'c',
      },
      [MQ.M]: {
        animationTimingFunction: 'd',
      },
    });
  });
});
