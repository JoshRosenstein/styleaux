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

import { textIndent } from '../textIndent';

describe('textIndent', () => {
  it('should return a function', () => {
    const result = textIndent();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textIndent` as component and css prop', () => {
    const result = textIndent()({ textIndent: 'inherit' });
    expect(toStyles(result)).toEqual({ textIndent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textIndent<'a'>()({ textIndent: 'a' });
    expect(toStyles(result)).toEqual({ textIndent: 'a' });
  });

  it('should use an interface which marks `textIndent` as optional', () => {
    const result = textIndent<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textIndent<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textIndent: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textIndent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textIndent<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textIndent: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textIndent: 'a',
      [MQ.D]: {
        textIndent: 'b',
      },
      [MQ.T]: {
        textIndent: 'c',
      },
      [MQ.M]: {
        textIndent: 'd',
      },
    });
  });
});
