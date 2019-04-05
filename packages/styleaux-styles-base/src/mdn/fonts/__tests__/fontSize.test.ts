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

import { createFontSize } from '../fontSize';

describe('fontSize', () => {
  it('should return a function', () => {
    const result = createFontSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontSize` as component and css prop', () => {
    const result = createFontSize()({ fontSize: 'inherit' });
    expect(toStyles(result)).toEqual({ fontSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontSize<'a'>()({ fontSize: 'a' });
    expect(toStyles(result)).toEqual({ fontSize: 'a' });
  });

  it('should use an interface which marks `fontSize` as optional', () => {
    const result = createFontSize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createFontSize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontSize: 'a',
      [MQ.D]: {
        fontSize: 'b',
      },
      [MQ.T]: {
        fontSize: 'c',
      },
      [MQ.M]: {
        fontSize: 'd',
      },
    });
  });
});
