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

import { createScrollMarginInlineStart } from '../scrollMarginInlineStart';

describe('scrollMarginInlineStart', () => {
  it('should return a function', () => {
    const result = createScrollMarginInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginInlineStart` as component and css prop', () => {
    const result = createScrollMarginInlineStart()({ scrollMarginInlineStart: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginInlineStart<'a'>()({ scrollMarginInlineStart: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginInlineStart: 'a' });
  });

  it('should use an interface which marks `scrollMarginInlineStart` as optional', () => {
    const result = createScrollMarginInlineStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginInlineStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginInlineStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollMarginInlineStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginInlineStart: 'a',
      [MQ.D]: {
        scrollMarginInlineStart: 'b',
      },
      [MQ.T]: {
        scrollMarginInlineStart: 'c',
      },
      [MQ.M]: {
        scrollMarginInlineStart: 'd',
      },
    });
  });
});
