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

import { animationName } from '../animationName';

describe('animationName', () => {
  it('should return a function', () => {
    const result = animationName();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `animationName` as component and css prop', () => {
    const result = animationName()({ animationName: 'inherit' });
    expect(toStyles(result)).toEqual({ animationName: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationName<'a'>()({ animationName: 'a' });
    expect(toStyles(result)).toEqual({ animationName: 'a' });
  });

  it('should use an interface which marks `animationName` as optional', () => {
    const result = animationName<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = animationName<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animationName: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationName: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationName<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      animationName: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      animationName: 'a',
      [MQ.D]: {
        animationName: 'b',
      },
      [MQ.T]: {
        animationName: 'c',
      },
      [MQ.M]: {
        animationName: 'd',
      },
    });
  });
});
