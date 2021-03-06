import { createScrollBehavior } from '../scrollBehavior';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createScrollBehavior', () => {
  it('should return a function', () => {
    const result = createScrollBehavior();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollBehavior` as component and css prop', () => {
    const result = createScrollBehavior()({ scrollBehavior: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollBehavior: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollBehavior<'a'>()({ scrollBehavior: 'a' });
    expect(toStyles(result)).toEqual({ scrollBehavior: 'a' });
  });

  it('should use an interface which marks `createScrollBehavior` as optional', () => {
    const result = createScrollBehavior<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollBehavior<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ scrollBehavior: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollBehavior: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollBehavior<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollBehavior: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollBehavior: 'a',
      [MQ.D]: {
        scrollBehavior: 'b',
      },
      [MQ.T]: {
        scrollBehavior: 'c',
      },
      [MQ.M]: {
        scrollBehavior: 'd',
      },
    });
  });
});
