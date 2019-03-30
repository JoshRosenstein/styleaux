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

import { wordSpacing } from '../wordSpacing';

describe('wordSpacing', () => {
  it('should return a function', () => {
    const result = wordSpacing();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `wordSpacing` as component and css prop', () => {
    const result = wordSpacing()({ wordSpacing: 'inherit' });
    expect(toStyles(result)).toEqual({ wordSpacing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = wordSpacing<'a'>()({ wordSpacing: 'a' });
    expect(toStyles(result)).toEqual({ wordSpacing: 'a' });
  });

  it('should use an interface which marks `wordSpacing` as optional', () => {
    const result = wordSpacing<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = wordSpacing<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ wordSpacing: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      wordSpacing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = wordSpacing<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      wordSpacing: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      wordSpacing: 'a',
      [MQ.D]: {
        wordSpacing: 'b',
      },
      [MQ.T]: {
        wordSpacing: 'c',
      },
      [MQ.M]: {
        wordSpacing: 'd',
      },
    });
  });
});
