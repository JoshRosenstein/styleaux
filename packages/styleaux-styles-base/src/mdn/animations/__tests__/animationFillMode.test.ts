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

import { animationFillMode } from '../animationFillMode';

describe('animationFillMode', () => {
  it('should return a function', () => {
    const result = animationFillMode();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `animationFillMode` as component and css prop', () => {
    const result = animationFillMode()({ animationFillMode: 'inherit' });
    expect(toStyles(result)).toEqual({ animationFillMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationFillMode<'a'>()({ animationFillMode: 'a' });
    expect(toStyles(result)).toEqual({ animationFillMode: 'a' });
  });

  it('should use an interface which marks `animationFillMode` as optional', () => {
    const result = animationFillMode<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = animationFillMode<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animationFillMode: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationFillMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationFillMode<
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
