import { createWordBreak } from '../wordBreak';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createWordBreak', () => {
  it('should return a function', () => {
    const result = createWordBreak();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createWordBreak` as component and css prop', () => {
    const result = createWordBreak()({ wordBreak: 'inherit' });
    expect(toStyles(result)).toEqual({ wordBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createWordBreak<'a'>()({ wordBreak: 'a' });
    expect(toStyles(result)).toEqual({ wordBreak: 'a' });
  });

  it('should use an interface which marks `createWordBreak` as optional', () => {
    const result = createWordBreak<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createWordBreak<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ wordBreak: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      wordBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createWordBreak<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      wordBreak: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      wordBreak: 'a',
      [MQ.D]: {
        wordBreak: 'b',
      },
      [MQ.T]: {
        wordBreak: 'c',
      },
      [MQ.M]: {
        wordBreak: 'd',
      },
    });
  });
});
