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

import { marginBlockEnd } from '../marginBlockEnd';

describe('marginBlockEnd', () => {
  it('should return a function', () => {
    const result = marginBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginBlockEnd` as component and css prop', () => {
    const result = marginBlockEnd()({ marginBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ marginBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginBlockEnd<'a'>()({ marginBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ marginBlockEnd: 'a' });
  });

  it('should use an interface which marks `marginBlockEnd` as optional', () => {
    const result = marginBlockEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = marginBlockEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginBlockEnd: 'a',
      [MQ.D]: {
        marginBlockEnd: 'b',
      },
      [MQ.T]: {
        marginBlockEnd: 'c',
      },
      [MQ.M]: {
        marginBlockEnd: 'd',
      },
    });
  });
});
