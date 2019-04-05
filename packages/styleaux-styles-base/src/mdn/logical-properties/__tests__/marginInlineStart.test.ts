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

import { createMarginInlineStart } from '../marginInlineStart';

describe('marginInlineStart', () => {
  it('should return a function', () => {
    const result = createMarginInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginInlineStart` as component and css prop', () => {
    const result = createMarginInlineStart()({ marginInlineStart: 'inherit' });
    expect(toStyles(result)).toEqual({ marginInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginInlineStart<'a'>()({ marginInlineStart: 'a' });
    expect(toStyles(result)).toEqual({ marginInlineStart: 'a' });
  });

  it('should use an interface which marks `marginInlineStart` as optional', () => {
    const result = createMarginInlineStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMarginInlineStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginInlineStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginInlineStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginInlineStart: 'a',
      [MQ.D]: {
        marginInlineStart: 'b',
      },
      [MQ.T]: {
        marginInlineStart: 'c',
      },
      [MQ.M]: {
        marginInlineStart: 'd',
      },
    });
  });
});
