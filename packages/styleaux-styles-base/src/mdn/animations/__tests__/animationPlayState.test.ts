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

import { createAnimationPlayState } from '../animationPlayState';

describe('animationPlayState', () => {
  it('should return a function', () => {
    const result = createAnimationPlayState();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `animationPlayState` as component and css prop', () => {
    const result = createAnimationPlayState()({ animationPlayState: 'inherit' });
    expect(toStyles(result)).toEqual({ animationPlayState: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAnimationPlayState<'a'>()({ animationPlayState: 'a' });
    expect(toStyles(result)).toEqual({ animationPlayState: 'a' });
  });

  it('should use an interface which marks `animationPlayState` as optional', () => {
    const result = createAnimationPlayState<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createAnimationPlayState<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animationPlayState: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationPlayState: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAnimationPlayState<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      animationPlayState: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      animationPlayState: 'a',
      [MQ.D]: {
        animationPlayState: 'b',
      },
      [MQ.T]: {
        animationPlayState: 'c',
      },
      [MQ.M]: {
        animationPlayState: 'd',
      },
    });
  });
});
