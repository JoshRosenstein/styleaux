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

import { createScrollMarginInlineEnd } from '../scrollMarginInlineEnd';

describe('scrollMarginInlineEnd', () => {
  it('should return a function', () => {
    const result = createScrollMarginInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginInlineEnd` as component and css prop', () => {
    const result = createScrollMarginInlineEnd()({ scrollMarginInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginInlineEnd<'a'>()({ scrollMarginInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginInlineEnd: 'a' });
  });

  it('should use an interface which marks `scrollMarginInlineEnd` as optional', () => {
    const result = createScrollMarginInlineEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginInlineEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginInlineEnd<
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
