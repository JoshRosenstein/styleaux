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

import { createScrollPaddingInline } from '../scrollPaddingInline';

describe('scrollPaddingInline', () => {
  it('should return a function', () => {
    const result = createScrollPaddingInline();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingInline` as component and css prop', () => {
    const result = createScrollPaddingInline()({ scrollPaddingInline: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPaddingInline<'a'>()({ scrollPaddingInline: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingInline: 'a' });
  });

  it('should use an interface which marks `scrollPaddingInline` as optional', () => {
    const result = createScrollPaddingInline<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollPaddingInline<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingInline: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPaddingInline<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPaddingInline: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingInline: 'a',
      [MQ.D]: {
        scrollPaddingInline: 'b',
      },
      [MQ.T]: {
        scrollPaddingInline: 'c',
      },
      [MQ.M]: {
        scrollPaddingInline: 'd',
      },
    });
  });
});
