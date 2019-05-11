import { createBorderImageSlice } from '../borderImageSlice';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderImageSlice', () => {
  it('should return a function', () => {
    const result = createBorderImageSlice();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderImageSlice` as component and css prop', () => {
    const result = createBorderImageSlice()({ borderImageSlice: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageSlice: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderImageSlice<'a'>()({ borderImageSlice: 'a' });
    expect(toStyles(result)).toEqual({ borderImageSlice: 'a' });
  });

  it('should use an interface which marks `createBorderImageSlice` as optional', () => {
    const result = createBorderImageSlice<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderImageSlice<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderImageSlice: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageSlice: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderImageSlice<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderImageSlice: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImageSlice: 'a',
      [MQ.D]: {
        borderImageSlice: 'b',
      },
      [MQ.T]: {
        borderImageSlice: 'c',
      },
      [MQ.M]: {
        borderImageSlice: 'd',
      },
    });
  });
});
