import { createScrollMarginInlineStart } from '../scrollMarginInlineStart';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createScrollMarginInlineStart', () => {
  it('should return a function', () => {
    const result = createScrollMarginInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollMarginInlineStart` as component and css prop', () => {
    const result = createScrollMarginInlineStart()({
      scrollMarginInlineStart: 'inherit',
    });
    expect(toStyles(result)).toEqual({ scrollMarginInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginInlineStart<'a'>()({
      scrollMarginInlineStart: 'a',
    });
    expect(toStyles(result)).toEqual({ scrollMarginInlineStart: 'a' });
  });

  it('should use an interface which marks `createScrollMarginInlineStart` as optional', () => {
    const result = createScrollMarginInlineStart<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginInlineStart<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
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
