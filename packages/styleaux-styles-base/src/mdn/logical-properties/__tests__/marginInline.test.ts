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

import { marginInline } from '../marginInline';

describe('marginInline', () => {
  it('should return a function', () => {
    const result = marginInline();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginInline` as component and css prop', () => {
    const result = marginInline()({ marginInline: 'inherit' });
    expect(toStyles(result)).toEqual({ marginInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginInline<'a'>()({ marginInline: 'a' });
    expect(toStyles(result)).toEqual({ marginInline: 'a' });
  });

  it('should use an interface which marks `marginInline` as optional', () => {
    const result = marginInline<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = marginInline<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginInline: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginInline<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginInline: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginInline: 'a',
      [MQ.D]: {
        marginInline: 'b',
      },
      [MQ.T]: {
        marginInline: 'c',
      },
      [MQ.M]: {
        marginInline: 'd',
      },
    });
  });
});
