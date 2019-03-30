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

import { scrollMarginInlineEnd } from '../scrollMarginInlineEnd';

describe('scrollMarginInlineEnd', () => {
  it('should return a function', () => {
    const result = scrollMarginInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginInlineEnd` as component and css prop', () => {
    const result = scrollMarginInlineEnd()({ scrollMarginInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginInlineEnd<'a'>()({ scrollMarginInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginInlineEnd: 'a' });
  });

  it('should use an interface which marks `scrollMarginInlineEnd` as optional', () => {
    const result = scrollMarginInlineEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginInlineEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginInlineEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollMarginInlineEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginInlineEnd: 'a',
      [MQ.D]: {
        scrollMarginInlineEnd: 'b',
      },
      [MQ.T]: {
        scrollMarginInlineEnd: 'c',
      },
      [MQ.M]: {
        scrollMarginInlineEnd: 'd',
      },
    });
  });
});
