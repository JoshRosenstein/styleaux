import { createOverflowY } from '../overflowY';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createOverflowY', () => {
  it('should return a function', () => {
    const result = createOverflowY();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOverflowY` as component and css prop', () => {
    const result = createOverflowY()({ overflowY: 'inherit' });
    expect(toStyles(result)).toEqual({ overflowY: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOverflowY<'a'>()({ overflowY: 'a' });
    expect(toStyles(result)).toEqual({ overflowY: 'a' });
  });

  it('should use an interface which marks `createOverflowY` as optional', () => {
    const result = createOverflowY<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOverflowY<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ overflowY: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      overflowY: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOverflowY<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      overflowY: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      overflowY: 'a',
      [MQ.D]: {
        overflowY: 'b',
      },
      [MQ.T]: {
        overflowY: 'c',
      },
      [MQ.M]: {
        overflowY: 'd',
      },
    });
  });
});
