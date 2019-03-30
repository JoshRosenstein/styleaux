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

import { wordWrap } from '../wordWrap';

describe('wordWrap', () => {
  it('should return a function', () => {
    const result = wordWrap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `wordWrap` as component and css prop', () => {
    const result = wordWrap()({ wordWrap: 'inherit' });
    expect(toStyles(result)).toEqual({ wordWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = wordWrap<'a'>()({ wordWrap: 'a' });
    expect(toStyles(result)).toEqual({ wordWrap: 'a' });
  });

  it('should use an interface which marks `wordWrap` as optional', () => {
    const result = wordWrap<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = wordWrap<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ wordWrap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      wordWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = wordWrap<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      wordWrap: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      wordWrap: 'a',
      [MQ.D]: {
        wordWrap: 'b',
      },
      [MQ.T]: {
        wordWrap: 'c',
      },
      [MQ.M]: {
        wordWrap: 'd',
      },
    });
  });
});
