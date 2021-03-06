import { createColorAdjust } from '../colorAdjust';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createColorAdjust', () => {
  it('should return a function', () => {
    const result = createColorAdjust();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createColorAdjust` as component and css prop', () => {
    const result = createColorAdjust()({ colorAdjust: 'inherit' });
    expect(toStyles(result)).toEqual({ colorAdjust: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createColorAdjust<'a'>()({ colorAdjust: 'a' });
    expect(toStyles(result)).toEqual({ colorAdjust: 'a' });
  });

  it('should use an interface which marks `createColorAdjust` as optional', () => {
    const result = createColorAdjust<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createColorAdjust<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ colorAdjust: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      colorAdjust: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createColorAdjust<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      colorAdjust: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      colorAdjust: 'a',
      [MQ.D]: {
        colorAdjust: 'b',
      },
      [MQ.T]: {
        colorAdjust: 'c',
      },
      [MQ.M]: {
        colorAdjust: 'd',
      },
    });
  });
});
