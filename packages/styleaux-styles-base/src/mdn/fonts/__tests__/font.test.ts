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

import { font } from '../font';

describe('font', () => {
  it('should return a function', () => {
    const result = font();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `font` as component and css prop', () => {
    const result = font()({ font: 'inherit' });
    expect(toStyles(result)).toEqual({ font: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = font<'a'>()({ font: 'a' });
    expect(toStyles(result)).toEqual({ font: 'a' });
  });

  it('should use an interface which marks `font` as optional', () => {
    const result = font<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = font<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ font: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      font: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = font<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      font: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      font: 'a',
      [MQ.D]: {
        font: 'b',
      },
      [MQ.T]: {
        font: 'c',
      },
      [MQ.M]: {
        font: 'd',
      },
    });
  });
});
