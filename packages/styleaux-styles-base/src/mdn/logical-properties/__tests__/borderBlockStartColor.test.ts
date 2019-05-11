import { createBorderBlockStartColor } from '../borderBlockStartColor';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderBlockStartColor', () => {
  it('should return a function', () => {
    const result = createBorderBlockStartColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBlockStartColor` as component and css prop', () => {
    const result = createBorderBlockStartColor()({
      borderBlockStartColor: 'inherit',
    });
    expect(toStyles(result)).toEqual({ borderBlockStartColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockStartColor<'a'>()({
      borderBlockStartColor: 'a',
    });
    expect(toStyles(result)).toEqual({ borderBlockStartColor: 'a' });
  });

  it('should use an interface which marks `createBorderBlockStartColor` as optional', () => {
    const result = createBorderBlockStartColor<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockStartColor<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderBlockStartColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockStartColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockStartColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBlockStartColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockStartColor: 'a',
      [MQ.D]: {
        borderBlockStartColor: 'b',
      },
      [MQ.T]: {
        borderBlockStartColor: 'c',
      },
      [MQ.M]: {
        borderBlockStartColor: 'd',
      },
    });
  });
});
