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

import { clear } from '../clear';

describe('clear', () => {
  it('should return a function', () => {
    const result = clear();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `clear` as component and css prop', () => {
    const result = clear()({ clear: 'inherit' });
    expect(toStyles(result)).toEqual({ clear: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = clear<'a'>()({ clear: 'a' });
    expect(toStyles(result)).toEqual({ clear: 'a' });
  });

  it('should use an interface which marks `clear` as optional', () => {
    const result = clear<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = clear<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ clear: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      clear: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = clear<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      clear: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      clear: 'a',
      [MQ.D]: {
        clear: 'b',
      },
      [MQ.T]: {
        clear: 'c',
      },
      [MQ.M]: {
        clear: 'd',
      },
    });
  });
});