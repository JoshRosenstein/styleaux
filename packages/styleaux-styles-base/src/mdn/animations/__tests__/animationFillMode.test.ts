import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createAnimationFillMode } from '../animationFillMode';

describe('createAnimationFillMode', () => {
  it('should return a function', () => {
    const result = createAnimationFillMode();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createAnimationFillMode` as component and css prop', () => {
    const result = createAnimationFillMode()({ animationFillMode: 'inherit' });
    expect(toStyles(result)).toEqual({ animationFillMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAnimationFillMode<'a'>()({ animationFillMode: 'a' });
    expect(toStyles(result)).toEqual({ animationFillMode: 'a' });
  });

  it('should use an interface which marks `createAnimationFillMode` as optional', () => {
    const result = createAnimationFillMode<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createAnimationFillMode<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animationFillMode: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationFillMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAnimationFillMode<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      animationFillMode: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      animationFillMode: 'a',
      [MQ.D]: {
        animationFillMode: 'b',
      },
      [MQ.T]: {
        animationFillMode: 'c',
      },
      [MQ.M]: {
        animationFillMode: 'd',
      },
    });
  });
});
