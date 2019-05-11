import { createBorderRightColor } from '../borderRightColor';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderRightColor', () => {
  it('should return a function', () => {
    const result = createBorderRightColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderRightColor` as component and css prop', () => {
    const result = createBorderRightColor()({ borderRightColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderRightColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderRightColor<'a'>()({ borderRightColor: 'a' });
    expect(toStyles(result)).toEqual({ borderRightColor: 'a' });
  });

  it('should use an interface which marks `createBorderRightColor` as optional', () => {
    const result = createBorderRightColor<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderRightColor<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderRightColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderRightColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderRightColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderRightColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderRightColor: 'a',
      [MQ.D]: {
        borderRightColor: 'b',
      },
      [MQ.T]: {
        borderRightColor: 'c',
      },
      [MQ.M]: {
        borderRightColor: 'd',
      },
    });
  });
});
