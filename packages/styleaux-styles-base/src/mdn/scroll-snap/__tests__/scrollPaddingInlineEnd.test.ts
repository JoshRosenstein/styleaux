import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScrollPaddingInlineEnd } from '../scrollPaddingInlineEnd';

describe('createScrollPaddingInlineEnd', () => {
  it('should return a function', () => {
    const result = createScrollPaddingInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollPaddingInlineEnd` as component and css prop', () => {
    const result = createScrollPaddingInlineEnd()({ scrollPaddingInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPaddingInlineEnd<'a'>()({ scrollPaddingInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingInlineEnd: 'a' });
  });

  it('should use an interface which marks `createScrollPaddingInlineEnd` as optional', () => {
    const result = createScrollPaddingInlineEnd<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollPaddingInlineEnd<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPaddingInlineEnd<
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
