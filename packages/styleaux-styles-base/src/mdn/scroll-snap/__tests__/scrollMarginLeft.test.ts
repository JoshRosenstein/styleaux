import { createScrollMarginLeft } from '../scrollMarginLeft';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createScrollMarginLeft', () => {
  it('should return a function', () => {
    const result = createScrollMarginLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollMarginLeft` as component and css prop', () => {
    const result = createScrollMarginLeft()({ scrollMarginLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginLeft<'a'>()({ scrollMarginLeft: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginLeft: 'a' });
  });

  it('should use an interface which marks `createScrollMarginLeft` as optional', () => {
    const result = createScrollMarginLeft<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginLeft<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ scrollMarginLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginLeft<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollMarginLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginLeft: 'a',
      [MQ.D]: {
        scrollMarginLeft: 'b',
      },
      [MQ.T]: {
        scrollMarginLeft: 'c',
      },
      [MQ.M]: {
        scrollMarginLeft: 'd',
      },
    });
  });
});
