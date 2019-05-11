import { createScrollMargin } from '../scrollMargin';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createScrollMargin', () => {
  it('should return a function', () => {
    const result = createScrollMargin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollMargin` as component and css prop', () => {
    const result = createScrollMargin()({ scrollMargin: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMargin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMargin<'a'>()({ scrollMargin: 'a' });
    expect(toStyles(result)).toEqual({ scrollMargin: 'a' });
  });

  it('should use an interface which marks `createScrollMargin` as optional', () => {
    const result = createScrollMargin<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollMargin<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ scrollMargin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMargin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMargin<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      scrollMargin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMargin: 'a',
      [MQ.D]: {
        scrollMargin: 'b',
      },
      [MQ.T]: {
        scrollMargin: 'c',
      },
      [MQ.M]: {
        scrollMargin: 'd',
      },
    });
  });
});
