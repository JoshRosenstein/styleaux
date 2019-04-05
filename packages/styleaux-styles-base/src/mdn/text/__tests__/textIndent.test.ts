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

import { createTextIndent } from '../textIndent';

describe('textIndent', () => {
  it('should return a function', () => {
    const result = createTextIndent();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textIndent` as component and css prop', () => {
    const result = createTextIndent()({ textIndent: 'inherit' });
    expect(toStyles(result)).toEqual({ textIndent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextIndent<'a'>()({ textIndent: 'a' });
    expect(toStyles(result)).toEqual({ textIndent: 'a' });
  });

  it('should use an interface which marks `textIndent` as optional', () => {
    const result = createTextIndent<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTextIndent<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textIndent: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textIndent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextIndent<
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
