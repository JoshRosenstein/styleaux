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

import { createCaretColor } from '../caretColor';

describe('caretColor', () => {
  it('should return a function', () => {
    const result = createCaretColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `caretColor` as component and css prop', () => {
    const result = createCaretColor()({ caretColor: 'inherit' });
    expect(toStyles(result)).toEqual({ caretColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createCaretColor<'a'>()({ caretColor: 'a' });
    expect(toStyles(result)).toEqual({ caretColor: 'a' });
  });

  it('should use an interface which marks `caretColor` as optional', () => {
    const result = createCaretColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createCaretColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ caretColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      caretColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createCaretColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      caretColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      caretColor: 'a',
      [MQ.D]: {
        caretColor: 'b',
      },
      [MQ.T]: {
        caretColor: 'c',
      },
      [MQ.M]: {
        caretColor: 'd',
      },
    });
  });
});
