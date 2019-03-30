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

import { willChange } from '../willChange';

describe('willChange', () => {
  it('should return a function', () => {
    const result = willChange();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `willChange` as component and css prop', () => {
    const result = willChange()({ willChange: 'inherit' });
    expect(toStyles(result)).toEqual({ willChange: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = willChange<'a'>()({ willChange: 'a' });
    expect(toStyles(result)).toEqual({ willChange: 'a' });
  });

  it('should use an interface which marks `willChange` as optional', () => {
    const result = willChange<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = willChange<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ willChange: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      willChange: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = willChange<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      willChange: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      willChange: 'a',
      [MQ.D]: {
        willChange: 'b',
      },
      [MQ.T]: {
        willChange: 'c',
      },
      [MQ.M]: {
        willChange: 'd',
      },
    });
  });
});
