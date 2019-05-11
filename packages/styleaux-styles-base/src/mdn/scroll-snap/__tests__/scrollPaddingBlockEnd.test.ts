import { createScrollPaddingBlockEnd } from '../scrollPaddingBlockEnd';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createScrollPaddingBlockEnd', () => {
  it('should return a function', () => {
    const result = createScrollPaddingBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollPaddingBlockEnd` as component and css prop', () => {
    const result = createScrollPaddingBlockEnd()({
      scrollPaddingBlockEnd: 'inherit',
    });
    expect(toStyles(result)).toEqual({ scrollPaddingBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPaddingBlockEnd<'a'>()({
      scrollPaddingBlockEnd: 'a',
    });
    expect(toStyles(result)).toEqual({ scrollPaddingBlockEnd: 'a' });
  });

  it('should use an interface which marks `createScrollPaddingBlockEnd` as optional', () => {
    const result = createScrollPaddingBlockEnd<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollPaddingBlockEnd<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ scrollPaddingBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPaddingBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollPaddingBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlockEnd: 'a',
      [MQ.D]: {
        scrollPaddingBlockEnd: 'b',
      },
      [MQ.T]: {
        scrollPaddingBlockEnd: 'c',
      },
      [MQ.M]: {
        scrollPaddingBlockEnd: 'd',
      },
    });
  });
});
