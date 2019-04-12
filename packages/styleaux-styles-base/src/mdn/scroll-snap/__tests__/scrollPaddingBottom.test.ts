import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScrollPaddingBottom } from '../scrollPaddingBottom';

describe('createScrollPaddingBottom', () => {
  it('should return a function', () => {
    const result = createScrollPaddingBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollPaddingBottom` as component and css prop', () => {
    const result = createScrollPaddingBottom()({ scrollPaddingBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPaddingBottom<'a'>()({ scrollPaddingBottom: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingBottom: 'a' });
  });

  it('should use an interface which marks `createScrollPaddingBottom` as optional', () => {
    const result = createScrollPaddingBottom<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollPaddingBottom<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPaddingBottom<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollPaddingBottom: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      scrollPaddingBottom: 'a',
      [MQ.D]: {
        scrollPaddingBottom: 'b',
      },
      [MQ.T]: {
        scrollPaddingBottom: 'c',
      },
      [MQ.M]: {
        scrollPaddingBottom: 'd',
      },
    });
  });
});
