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

import { fontFamily } from '../fontFamily';

describe('fontFamily', () => {
  it('should return a function', () => {
    const result = fontFamily();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontFamily` as component and css prop', () => {
    const result = fontFamily()({ fontFamily: 'inherit' });
    expect(toStyles(result)).toEqual({ fontFamily: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontFamily<'a'>()({ fontFamily: 'a' });
    expect(toStyles(result)).toEqual({ fontFamily: 'a' });
  });

  it('should use an interface which marks `fontFamily` as optional', () => {
    const result = fontFamily<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontFamily<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontFamily: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontFamily: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontFamily<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontFamily: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontFamily: 'a',
      [MQ.D]: {
        fontFamily: 'b',
      },
      [MQ.T]: {
        fontFamily: 'c',
      },
      [MQ.M]: {
        fontFamily: 'd',
      },
    });
  });
});
