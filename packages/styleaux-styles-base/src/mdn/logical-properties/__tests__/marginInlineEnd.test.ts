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

import { createMarginInlineEnd } from '../marginInlineEnd';

describe('marginInlineEnd', () => {
  it('should return a function', () => {
    const result = createMarginInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginInlineEnd` as component and css prop', () => {
    const result = createMarginInlineEnd()({ marginInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ marginInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginInlineEnd<'a'>()({ marginInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ marginInlineEnd: 'a' });
  });

  it('should use an interface which marks `marginInlineEnd` as optional', () => {
    const result = createMarginInlineEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMarginInlineEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginInlineEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginInlineEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginInlineEnd: 'a',
      [MQ.D]: {
        marginInlineEnd: 'b',
      },
      [MQ.T]: {
        marginInlineEnd: 'c',
      },
      [MQ.M]: {
        marginInlineEnd: 'd',
      },
    });
  });
});
