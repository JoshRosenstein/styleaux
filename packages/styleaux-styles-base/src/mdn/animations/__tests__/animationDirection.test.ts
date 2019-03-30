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

import { animationDirection } from '../animationDirection';

describe('animationDirection', () => {
  it('should return a function', () => {
    const result = animationDirection();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `animationDirection` as component and css prop', () => {
    const result = animationDirection()({ animationDirection: 'inherit' });
    expect(toStyles(result)).toEqual({ animationDirection: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationDirection<'a'>()({ animationDirection: 'a' });
    expect(toStyles(result)).toEqual({ animationDirection: 'a' });
  });

  it('should use an interface which marks `animationDirection` as optional', () => {
    const result = animationDirection<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = animationDirection<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animationDirection: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationDirection: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationDirection<
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
