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

import { createWordWrap } from '../wordWrap';

describe('wordWrap', () => {
  it('should return a function', () => {
    const result = createWordWrap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `wordWrap` as component and css prop', () => {
    const result = createWordWrap()({ wordWrap: 'inherit' });
    expect(toStyles(result)).toEqual({ wordWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createWordWrap<'a'>()({ wordWrap: 'a' });
    expect(toStyles(result)).toEqual({ wordWrap: 'a' });
  });

  it('should use an interface which marks `wordWrap` as optional', () => {
    const result = createWordWrap<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createWordWrap<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ wordWrap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      wordWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createWordWrap<
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
