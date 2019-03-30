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

import { fontKerning } from '../fontKerning';

describe('fontKerning', () => {
  it('should return a function', () => {
    const result = fontKerning();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontKerning` as component and css prop', () => {
    const result = fontKerning()({ fontKerning: 'inherit' });
    expect(toStyles(result)).toEqual({ fontKerning: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontKerning<'a'>()({ fontKerning: 'a' });
    expect(toStyles(result)).toEqual({ fontKerning: 'a' });
  });

  it('should use an interface which marks `fontKerning` as optional', () => {
    const result = fontKerning<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontKerning<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontKerning: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontKerning: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontKerning<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontKerning: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontKerning: 'a',
      [MQ.D]: {
        fontKerning: 'b',
      },
      [MQ.T]: {
        fontKerning: 'c',
      },
      [MQ.M]: {
        fontKerning: 'd',
      },
    });
  });
});
