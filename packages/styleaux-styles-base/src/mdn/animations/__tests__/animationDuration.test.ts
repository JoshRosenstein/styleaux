import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createAnimationDuration } from '../animationDuration';

describe('createAnimationDuration', () => {
  it('should return a function', () => {
    const result = createAnimationDuration();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createAnimationDuration` as component and css prop', () => {
    const result = createAnimationDuration()({ animationDuration: 'inherit' });
    expect(toStyles(result)).toEqual({ animationDuration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAnimationDuration<'a'>()({ animationDuration: 'a' });
    expect(toStyles(result)).toEqual({ animationDuration: 'a' });
  });

  it('should use an interface which marks `createAnimationDuration` as optional', () => {
    const result = createAnimationDuration<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createAnimationDuration<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animationDuration: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationDuration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAnimationDuration<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      animationDuration: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      animationDuration: 'a',
      [MQ.D]: {
        animationDuration: 'b',
      },
      [MQ.T]: {
        animationDuration: 'c',
      },
      [MQ.M]: {
        animationDuration: 'd',
      },
    });
  });
});
