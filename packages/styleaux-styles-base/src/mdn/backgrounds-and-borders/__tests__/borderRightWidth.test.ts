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

import { borderRightWidth } from '../borderRightWidth';

describe('borderRightWidth', () => {
  it('should return a function', () => {
    const result = borderRightWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderRightWidth` as component and css prop', () => {
    const result = borderRightWidth()({ borderRightWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderRightWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRightWidth<'a'>()({ borderRightWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderRightWidth: 'a' });
  });

  it('should use an interface which marks `borderRightWidth` as optional', () => {
    const result = borderRightWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderRightWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderRightWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderRightWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRightWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderRightWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderRightWidth: 'a',
      [MQ.D]: {
        borderRightWidth: 'b',
      },
      [MQ.T]: {
        borderRightWidth: 'c',
      },
      [MQ.M]: {
        borderRightWidth: 'd',
      },
    });
  });
});