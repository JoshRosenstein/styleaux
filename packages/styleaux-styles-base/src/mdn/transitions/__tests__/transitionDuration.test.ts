import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTransitionDuration } from '../transitionDuration';

describe('createTransitionDuration', () => {
  it('should return a function', () => {
    const result = createTransitionDuration();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTransitionDuration` as component and css prop', () => {
    const result = createTransitionDuration()({ transitionDuration: 'inherit' });
    expect(toStyles(result)).toEqual({ transitionDuration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransitionDuration<'a'>()({ transitionDuration: 'a' });
    expect(toStyles(result)).toEqual({ transitionDuration: 'a' });
  });

  it('should use an interface which marks `createTransitionDuration` as optional', () => {
    const result = createTransitionDuration<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTransitionDuration<'value',never, IThemeWithoutBreakpoints>({
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
