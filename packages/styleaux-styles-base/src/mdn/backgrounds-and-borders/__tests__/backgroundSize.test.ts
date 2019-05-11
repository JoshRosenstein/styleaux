import { createBackgroundSize } from '../backgroundSize';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBackgroundSize', () => {
  it('should return a function', () => {
    const result = createBackgroundSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundSize` as component and css prop', () => {
    const result = createBackgroundSize()({ backgroundSize: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundSize<'a'>()({ backgroundSize: 'a' });
    expect(toStyles(result)).toEqual({ backgroundSize: 'a' });
  });

  it('should use an interface which marks `createBackgroundSize` as optional', () => {
    const result = createBackgroundSize<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundSize<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ backgroundSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundSize: 'a',
      [MQ.D]: {
        backgroundSize: 'b',
      },
      [MQ.T]: {
        backgroundSize: 'c',
      },
      [MQ.M]: {
        backgroundSize: 'd',
      },
    });
  });
});
