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

import { marginLeft } from '../marginLeft';

describe('marginLeft', () => {
  it('should return a function', () => {
    const result = marginLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginLeft` as component and css prop', () => {
    const result = marginLeft()({ marginLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ marginLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginLeft<'a'>()({ marginLeft: 'a' });
    expect(toStyles(result)).toEqual({ marginLeft: 'a' });
  });

  it('should use an interface which marks `marginLeft` as optional', () => {
    const result = marginLeft<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = marginLeft<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginLeft<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginLeft: 'a',
      [MQ.D]: {
        marginLeft: 'b',
      },
      [MQ.T]: {
        marginLeft: 'c',
      },
      [MQ.M]: {
        marginLeft: 'd',
      },
    });
  });
});