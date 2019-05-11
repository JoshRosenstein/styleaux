import { createColor } from '../color';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createColor', () => {
  it('should return a function', () => {
    const result = createColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createColor` as component and css prop', () => {
    const result = createColor()({ color: 'inherit' });
    expect(toStyles(result)).toEqual({ color: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createColor<'a'>()({ color: 'a' });
    expect(toStyles(result)).toEqual({ color: 'a' });
  });

  it('should use an interface which marks `createColor` as optional', () => {
    const result = createColor<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createColor<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ color: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      color: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createColor<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      color: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      color: 'a',
      [MQ.D]: {
        color: 'b',
      },
      [MQ.T]: {
        color: 'c',
      },
      [MQ.M]: {
        color: 'd',
      },
    });
  });
});
