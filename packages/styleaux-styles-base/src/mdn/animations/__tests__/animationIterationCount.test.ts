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

import { animationIterationCount } from '../animationIterationCount';

describe('animationIterationCount', () => {
  it('should return a function', () => {
    const result = animationIterationCount();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `animationIterationCount` as component and css prop', () => {
    const result = animationIterationCount()({ animationIterationCount: 'inherit' });
    expect(toStyles(result)).toEqual({ animationIterationCount: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationIterationCount<'a'>()({ animationIterationCount: 'a' });
    expect(toStyles(result)).toEqual({ animationIterationCount: 'a' });
  });

  it('should use an interface which marks `animationIterationCount` as optional', () => {
    const result = animationIterationCount<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = animationIterationCount<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animationIterationCount: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animationIterationCount: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationIterationCount<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      animationIterationCount: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      animationIterationCount: 'a',
      [MQ.D]: {
        animationIterationCount: 'b',
      },
      [MQ.T]: {
        animationIterationCount: 'c',
      },
      [MQ.M]: {
        animationIterationCount: 'd',
      },
    });
  });
});
