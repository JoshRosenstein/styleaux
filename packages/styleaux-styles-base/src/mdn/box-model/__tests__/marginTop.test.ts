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

import { marginTop } from '../marginTop';

describe('marginTop', () => {
  it('should return a function', () => {
    const result = marginTop();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginTop` as component and css prop', () => {
    const result = marginTop()({ marginTop: 'inherit' });
    expect(toStyles(result)).toEqual({ marginTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginTop<'a'>()({ marginTop: 'a' });
    expect(toStyles(result)).toEqual({ marginTop: 'a' });
  });

  it('should use an interface which marks `marginTop` as optional', () => {
    const result = marginTop<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = marginTop<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginTop: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginTop<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginTop: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginTop: 'a',
      [MQ.D]: {
        marginTop: 'b',
      },
      [MQ.T]: {
        marginTop: 'c',
      },
      [MQ.M]: {
        marginTop: 'd',
      },
    });
  });
});
