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

import { createTransitionDuration } from '../transitionDuration';

describe('transitionDuration', () => {
  it('should return a function', () => {
    const result = createTransitionDuration();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `transitionDuration` as component and css prop', () => {
    const result = createTransitionDuration()({ transitionDuration: 'inherit' });
    expect(toStyles(result)).toEqual({ transitionDuration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransitionDuration<'a'>()({ transitionDuration: 'a' });
    expect(toStyles(result)).toEqual({ transitionDuration: 'a' });
  });

  it('should use an interface which marks `transitionDuration` as optional', () => {
    const result = createTransitionDuration<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTransitionDuration<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transitionDuration: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transitionDuration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransitionDuration<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      transitionDuration: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      transitionDuration: 'a',
      [MQ.D]: {
        transitionDuration: 'b',
      },
      [MQ.T]: {
        transitionDuration: 'c',
      },
      [MQ.M]: {
        transitionDuration: 'd',
      },
    });
  });
});
