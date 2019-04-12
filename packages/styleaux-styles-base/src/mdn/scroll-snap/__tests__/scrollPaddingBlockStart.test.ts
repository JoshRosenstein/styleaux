import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScrollPaddingBlockStart } from '../scrollPaddingBlockStart';

describe('createScrollPaddingBlockStart', () => {
  it('should return a function', () => {
    const result = createScrollPaddingBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollPaddingBlockStart` as component and css prop', () => {
    const result = createScrollPaddingBlockStart()({ scrollPaddingBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPaddingBlockStart<'a'>()({ scrollPaddingBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingBlockStart: 'a' });
  });

  it('should use an interface which marks `createScrollPaddingBlockStart` as optional', () => {
    const result = createScrollPaddingBlockStart<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollPaddingBlockStart<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPaddingBlockStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollPaddingBlockStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      scrollPaddingBlockStart: 'a',
      [MQ.D]: {
        scrollPaddingBlockStart: 'b',
      },
      [MQ.T]: {
        scrollPaddingBlockStart: 'c',
      },
      [MQ.M]: {
        scrollPaddingBlockStart: 'd',
      },
    });
  });
});
