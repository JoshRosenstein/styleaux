import { createGridRowEnd } from '../gridRowEnd';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createGridRowEnd', () => {
  it('should return a function', () => {
    const result = createGridRowEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createGridRowEnd` as component and css prop', () => {
    const result = createGridRowEnd()({ gridRowEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ gridRowEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridRowEnd<'a'>()({ gridRowEnd: 'a' });
    expect(toStyles(result)).toEqual({ gridRowEnd: 'a' });
  });

  it('should use an interface which marks `createGridRowEnd` as optional', () => {
    const result = createGridRowEnd<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createGridRowEnd<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridRowEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridRowEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridRowEnd<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      gridRowEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridRowEnd: 'a',
      [MQ.D]: {
        gridRowEnd: 'b',
      },
      [MQ.T]: {
        gridRowEnd: 'c',
      },
      [MQ.M]: {
        gridRowEnd: 'd',
      },
    });
  });
});
