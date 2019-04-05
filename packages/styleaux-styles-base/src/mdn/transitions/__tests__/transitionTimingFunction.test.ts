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

import { createTransitionTimingFunction } from '../transitionTimingFunction';

describe('transitionTimingFunction', () => {
  it('should return a function', () => {
    const result = createTransitionTimingFunction();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `transitionTimingFunction` as component and css prop', () => {
    const result = createTransitionTimingFunction()({ transitionTimingFunction: 'inherit' });
    expect(toStyles(result)).toEqual({ transitionTimingFunction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransitionTimingFunction<'a'>()({ transitionTimingFunction: 'a' });
    expect(toStyles(result)).toEqual({ transitionTimingFunction: 'a' });
  });

  it('should use an interface which marks `transitionTimingFunction` as optional', () => {
    const result = createTransitionTimingFunction<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTransitionTimingFunction<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transitionTimingFunction: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transitionTimingFunction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransitionTimingFunction<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      transitionTimingFunction: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      transitionTimingFunction: 'a',
      [MQ.D]: {
        transitionTimingFunction: 'b',
      },
      [MQ.T]: {
        transitionTimingFunction: 'c',
      },
      [MQ.M]: {
        transitionTimingFunction: 'd',
      },
    });
  });
});
