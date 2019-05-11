import { createBorderBlockEndStyle } from '../borderBlockEndStyle';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderBlockEndStyle', () => {
  it('should return a function', () => {
    const result = createBorderBlockEndStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBlockEndStyle` as component and css prop', () => {
    const result = createBorderBlockEndStyle()({
      borderBlockEndStyle: 'inherit',
    });
    expect(toStyles(result)).toEqual({ borderBlockEndStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockEndStyle<'a'>()({
      borderBlockEndStyle: 'a',
    });
    expect(toStyles(result)).toEqual({ borderBlockEndStyle: 'a' });
  });

  it('should use an interface which marks `createBorderBlockEndStyle` as optional', () => {
    const result = createBorderBlockEndStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockEndStyle<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderBlockEndStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockEndStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockEndStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBlockEndStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockEndStyle: 'a',
      [MQ.D]: {
        borderBlockEndStyle: 'b',
      },
      [MQ.T]: {
        borderBlockEndStyle: 'c',
      },
      [MQ.M]: {
        borderBlockEndStyle: 'd',
      },
    });
  });
});
