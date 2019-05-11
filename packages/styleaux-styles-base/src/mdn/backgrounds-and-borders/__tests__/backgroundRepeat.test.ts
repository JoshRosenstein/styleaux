import { createBackgroundRepeat } from '../backgroundRepeat';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBackgroundRepeat', () => {
  it('should return a function', () => {
    const result = createBackgroundRepeat();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundRepeat` as component and css prop', () => {
    const result = createBackgroundRepeat()({ backgroundRepeat: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundRepeat: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundRepeat<'a'>()({ backgroundRepeat: 'a' });
    expect(toStyles(result)).toEqual({ backgroundRepeat: 'a' });
  });

  it('should use an interface which marks `createBackgroundRepeat` as optional', () => {
    const result = createBackgroundRepeat<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundRepeat<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ backgroundRepeat: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundRepeat: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundRepeat<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundRepeat: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundRepeat: 'a',
      [MQ.D]: {
        backgroundRepeat: 'b',
      },
      [MQ.T]: {
        backgroundRepeat: 'c',
      },
      [MQ.M]: {
        backgroundRepeat: 'd',
      },
    });
  });
});
