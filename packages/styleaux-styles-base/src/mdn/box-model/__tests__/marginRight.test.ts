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

import { marginRight } from '../marginRight';

describe('marginRight', () => {
  it('should return a function', () => {
    const result = marginRight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginRight` as component and css prop', () => {
    const result = marginRight()({ marginRight: 'inherit' });
    expect(toStyles(result)).toEqual({ marginRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginRight<'a'>()({ marginRight: 'a' });
    expect(toStyles(result)).toEqual({ marginRight: 'a' });
  });

  it('should use an interface which marks `marginRight` as optional', () => {
    const result = marginRight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = marginRight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginRight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginRight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginRight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginRight: 'a',
      [MQ.D]: {
        marginRight: 'b',
      },
      [MQ.T]: {
        marginRight: 'c',
      },
      [MQ.M]: {
        marginRight: 'd',
      },
    });
  });
});
