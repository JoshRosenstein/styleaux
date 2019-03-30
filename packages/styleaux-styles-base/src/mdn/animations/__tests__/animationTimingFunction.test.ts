import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { animationTimingFunction } from '../animationTimingFunction';

describe('animationTimingFunction', () => {
  it('should return a function', () => {
    const result = animationTimingFunction();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `animationTimingFunction` as component and css prop', () => {
    const result = animationTimingFunction()({ animationTimingFunction: 'inherit' });
    expect(toStyles(result)).toEqual({ animationTimingFunction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationTimingFunction<'a'>()({ animationTimingFunction: 'a' });
    expect(toStyles(result)).toEqual({ animationTimingFunction: 'a' });
  });

  it('should use an interface which marks `animationTimingFunction` as optional', () => {
    const result = animationTimingFunction<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = animationTimingFunction<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animationTimingFunction: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationTimingFunction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationTimingFunction<
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
