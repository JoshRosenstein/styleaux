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

import { color } from '../color';

describe('color', () => {
  it('should return a function', () => {
    const result = color();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `color` as component and css prop', () => {
    const result = color()({ color: 'inherit' });
    expect(toStyles(result)).toEqual({ color: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = color<'a'>()({ color: 'a' });
    expect(toStyles(result)).toEqual({ color: 'a' });
  });

  it('should use an interface which marks `color` as optional', () => {
    const result = color<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = color<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ color: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      color: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = color<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      color: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      color: 'a',
      [MQ.D]: {
        color: 'b',
      },
      [MQ.T]: {
        color: 'c',
      },
      [MQ.M]: {
        color: 'd',
      },
    });
  });
});
