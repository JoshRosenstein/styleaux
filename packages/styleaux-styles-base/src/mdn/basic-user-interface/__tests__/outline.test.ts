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

import { outline } from '../outline';

describe('outline', () => {
  it('should return a function', () => {
    const result = outline();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `outline` as component and css prop', () => {
    const result = outline()({ outline: 'inherit' });
    expect(toStyles(result)).toEqual({ outline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outline<'a'>()({ outline: 'a' });
    expect(toStyles(result)).toEqual({ outline: 'a' });
  });

  it('should use an interface which marks `outline` as optional', () => {
    const result = outline<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = outline<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outline: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outline<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      outline: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      outline: 'a',
      [MQ.D]: {
        outline: 'b',
      },
      [MQ.T]: {
        outline: 'c',
      },
      [MQ.M]: {
        outline: 'd',
      },
    });
  });
});
