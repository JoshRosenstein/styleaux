import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScrollPaddingInlineStart } from '../scrollPaddingInlineStart';

describe('createScrollPaddingInlineStart', () => {
  it('should return a function', () => {
    const result = createScrollPaddingInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollPaddingInlineStart` as component and css prop', () => {
    const result = createScrollPaddingInlineStart()({ scrollPaddingInlineStart: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPaddingInlineStart<'a'>()({ scrollPaddingInlineStart: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingInlineStart: 'a' });
  });

  it('should use an interface which marks `createScrollPaddingInlineStart` as optional', () => {
    const result = createScrollPaddingInlineStart<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollPaddingInlineStart<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPaddingInlineStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollPaddingInlineStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      scrollPaddingInlineStart: 'a',
      [MQ.D]: {
        scrollPaddingInlineStart: 'b',
      },
      [MQ.T]: {
        scrollPaddingInlineStart: 'c',
      },
      [MQ.M]: {
        scrollPaddingInlineStart: 'd',
      },
    });
  });
});
