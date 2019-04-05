import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { createWordBreak } from '../wordBreak';

describe('wordBreak', () => {
  it('should return a function', () => {
    const result = createWordBreak();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `wordBreak` as component and css prop', () => {
    const result = createWordBreak()({ wordBreak: 'inherit' });
    expect(toStyles(result)).toEqual({ wordBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createWordBreak<'a'>()({ wordBreak: 'a' });
    expect(toStyles(result)).toEqual({ wordBreak: 'a' });
  });

  it('should use an interface which marks `wordBreak` as optional', () => {
    const result = createWordBreak<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createWordBreak<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ wordBreak: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      wordBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createWordBreak<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
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
