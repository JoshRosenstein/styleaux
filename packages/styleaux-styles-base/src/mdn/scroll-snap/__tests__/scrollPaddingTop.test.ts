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

import { scrollPaddingTop } from '../scrollPaddingTop';

describe('scrollPaddingTop', () => {
  it('should return a function', () => {
    const result = scrollPaddingTop();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingTop` as component and css prop', () => {
    const result = scrollPaddingTop()({ scrollPaddingTop: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingTop<'a'>()({ scrollPaddingTop: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingTop: 'a' });
  });

  it('should use an interface which marks `scrollPaddingTop` as optional', () => {
    const result = scrollPaddingTop<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingTop<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingTop: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingTop<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPaddingTop: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingTop: 'a',
      [MQ.D]: {
        scrollPaddingTop: 'b',
      },
      [MQ.T]: {
        scrollPaddingTop: 'c',
      },
      [MQ.M]: {
        scrollPaddingTop: 'd',
      },
    });
  });
});
