import { createOverflowX } from '../overflowX';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createOverflowX', () => {
  it('should return a function', () => {
    const result = createOverflowX();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOverflowX` as component and css prop', () => {
    const result = createOverflowX()({ overflowX: 'inherit' });
    expect(toStyles(result)).toEqual({ overflowX: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOverflowX<'a'>()({ overflowX: 'a' });
    expect(toStyles(result)).toEqual({ overflowX: 'a' });
  });

  it('should use an interface which marks `createOverflowX` as optional', () => {
    const result = createOverflowX<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOverflowX<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ overflowX: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      overflowX: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOverflowX<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      overflowX: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      overflowX: 'a',
      [MQ.D]: {
        overflowX: 'b',
      },
      [MQ.T]: {
        overflowX: 'c',
      },
      [MQ.M]: {
        overflowX: 'd',
      },
    });
  });
});
