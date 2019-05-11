import { createUnicodeBidi } from '../unicodeBidi';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createUnicodeBidi', () => {
  it('should return a function', () => {
    const result = createUnicodeBidi();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createUnicodeBidi` as component and css prop', () => {
    const result = createUnicodeBidi()({ unicodeBidi: 'inherit' });
    expect(toStyles(result)).toEqual({ unicodeBidi: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createUnicodeBidi<'a'>()({ unicodeBidi: 'a' });
    expect(toStyles(result)).toEqual({ unicodeBidi: 'a' });
  });

  it('should use an interface which marks `createUnicodeBidi` as optional', () => {
    const result = createUnicodeBidi<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createUnicodeBidi<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ unicodeBidi: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      unicodeBidi: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createUnicodeBidi<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      unicodeBidi: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      unicodeBidi: 'a',
      [MQ.D]: {
        unicodeBidi: 'b',
      },
      [MQ.T]: {
        unicodeBidi: 'c',
      },
      [MQ.M]: {
        unicodeBidi: 'd',
      },
    });
  });
});
