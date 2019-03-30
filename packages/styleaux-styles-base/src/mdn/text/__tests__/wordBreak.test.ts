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

import { wordBreak } from '../wordBreak';

describe('wordBreak', () => {
  it('should return a function', () => {
    const result = wordBreak();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `wordBreak` as component and css prop', () => {
    const result = wordBreak()({ wordBreak: 'inherit' });
    expect(toStyles(result)).toEqual({ wordBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = wordBreak<'a'>()({ wordBreak: 'a' });
    expect(toStyles(result)).toEqual({ wordBreak: 'a' });
  });

  it('should use an interface which marks `wordBreak` as optional', () => {
    const result = wordBreak<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = wordBreak<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ wordBreak: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      wordBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = wordBreak<
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
