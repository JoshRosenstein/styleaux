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

import { createTransitionDelay } from '../transitionDelay';

describe('transitionDelay', () => {
  it('should return a function', () => {
    const result = createTransitionDelay();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `transitionDelay` as component and css prop', () => {
    const result = createTransitionDelay()({ transitionDelay: 'inherit' });
    expect(toStyles(result)).toEqual({ transitionDelay: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransitionDelay<'a'>()({ transitionDelay: 'a' });
    expect(toStyles(result)).toEqual({ transitionDelay: 'a' });
  });

  it('should use an interface which marks `transitionDelay` as optional', () => {
    const result = createTransitionDelay<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTransitionDelay<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transitionDelay: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transitionDelay: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransitionDelay<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      transitionDelay: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      transitionDelay: 'a',
      [MQ.D]: {
        transitionDelay: 'b',
      },
      [MQ.T]: {
        transitionDelay: 'c',
      },
      [MQ.M]: {
        transitionDelay: 'd',
      },
    });
  });
});
