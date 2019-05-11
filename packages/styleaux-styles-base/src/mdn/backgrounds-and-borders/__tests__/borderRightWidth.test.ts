import { createBorderRightWidth } from '../borderRightWidth';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderRightWidth', () => {
  it('should return a function', () => {
    const result = createBorderRightWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderRightWidth` as component and css prop', () => {
    const result = createBorderRightWidth()({ borderRightWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderRightWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderRightWidth<'a'>()({ borderRightWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderRightWidth: 'a' });
  });

  it('should use an interface which marks `createBorderRightWidth` as optional', () => {
    const result = createBorderRightWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderRightWidth<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderRightWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderRightWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderRightWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderRightWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderRightWidth: 'a',
      [MQ.D]: {
        borderRightWidth: 'b',
      },
      [MQ.T]: {
        borderRightWidth: 'c',
      },
      [MQ.M]: {
        borderRightWidth: 'd',
      },
    });
  });
});
