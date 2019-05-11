import { createBackgroundPositionX } from '../backgroundPositionX';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBackgroundPositionX', () => {
  it('should return a function', () => {
    const result = createBackgroundPositionX();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundPositionX` as component and css prop', () => {
    const result = createBackgroundPositionX()({
      backgroundPositionX: 'inherit',
    });
    expect(toStyles(result)).toEqual({ backgroundPositionX: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundPositionX<'a'>()({
      backgroundPositionX: 'a',
    });
    expect(toStyles(result)).toEqual({ backgroundPositionX: 'a' });
  });

  it('should use an interface which marks `createBackgroundPositionX` as optional', () => {
    const result = createBackgroundPositionX<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundPositionX<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ backgroundPositionX: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundPositionX: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundPositionX<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundPositionX: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundPositionX: 'a',
      [MQ.D]: {
        backgroundPositionX: 'b',
      },
      [MQ.T]: {
        backgroundPositionX: 'c',
      },
      [MQ.M]: {
        backgroundPositionX: 'd',
      },
    });
  });
});
