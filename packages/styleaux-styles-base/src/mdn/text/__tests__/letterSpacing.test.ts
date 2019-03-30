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

import { letterSpacing } from '../letterSpacing';

describe('letterSpacing', () => {
  it('should return a function', () => {
    const result = letterSpacing();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `letterSpacing` as component and css prop', () => {
    const result = letterSpacing()({ letterSpacing: 'inherit' });
    expect(toStyles(result)).toEqual({ letterSpacing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = letterSpacing<'a'>()({ letterSpacing: 'a' });
    expect(toStyles(result)).toEqual({ letterSpacing: 'a' });
  });

  it('should use an interface which marks `letterSpacing` as optional', () => {
    const result = letterSpacing<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = letterSpacing<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ letterSpacing: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      letterSpacing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = letterSpacing<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      letterSpacing: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      letterSpacing: 'a',
      [MQ.D]: {
        letterSpacing: 'b',
      },
      [MQ.T]: {
        letterSpacing: 'c',
      },
      [MQ.M]: {
        letterSpacing: 'd',
      },
    });
  });
});
