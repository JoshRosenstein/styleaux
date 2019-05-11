import { createMarginTop } from '../marginTop';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMarginTop', () => {
  it('should return a function', () => {
    const result = createMarginTop();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMarginTop` as component and css prop', () => {
    const result = createMarginTop()({ marginTop: 'inherit' });
    expect(toStyles(result)).toEqual({ marginTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginTop<'a'>()({ marginTop: 'a' });
    expect(toStyles(result)).toEqual({ marginTop: 'a' });
  });

  it('should use an interface which marks `createMarginTop` as optional', () => {
    const result = createMarginTop<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMarginTop<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginTop: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginTop<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      marginTop: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginTop: 'a',
      [MQ.D]: {
        marginTop: 'b',
      },
      [MQ.T]: {
        marginTop: 'c',
      },
      [MQ.M]: {
        marginTop: 'd',
      },
    });
  });
});
