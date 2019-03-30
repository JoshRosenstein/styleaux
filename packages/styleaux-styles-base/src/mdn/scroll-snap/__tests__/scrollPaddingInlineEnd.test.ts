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

import { scrollPaddingInlineEnd } from '../scrollPaddingInlineEnd';

describe('scrollPaddingInlineEnd', () => {
  it('should return a function', () => {
    const result = scrollPaddingInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingInlineEnd` as component and css prop', () => {
    const result = scrollPaddingInlineEnd()({ scrollPaddingInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingInlineEnd<'a'>()({ scrollPaddingInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingInlineEnd: 'a' });
  });

  it('should use an interface which marks `scrollPaddingInlineEnd` as optional', () => {
    const result = scrollPaddingInlineEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingInlineEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingInlineEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPaddingInlineEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingInlineEnd: 'a',
      [MQ.D]: {
        scrollPaddingInlineEnd: 'b',
      },
      [MQ.T]: {
        scrollPaddingInlineEnd: 'c',
      },
      [MQ.M]: {
        scrollPaddingInlineEnd: 'd',
      },
    });
  });
});
