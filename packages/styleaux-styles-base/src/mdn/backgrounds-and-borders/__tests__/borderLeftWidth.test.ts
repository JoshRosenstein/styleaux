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

import { borderLeftWidth } from '../borderLeftWidth';

describe('borderLeftWidth', () => {
  it('should return a function', () => {
    const result = borderLeftWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderLeftWidth` as component and css prop', () => {
    const result = borderLeftWidth()({ borderLeftWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderLeftWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeftWidth<'a'>()({ borderLeftWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderLeftWidth: 'a' });
  });

  it('should use an interface which marks `borderLeftWidth` as optional', () => {
    const result = borderLeftWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderLeftWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderLeftWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderLeftWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeftWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderLeftWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderLeftWidth: 'a',
      [MQ.D]: {
        borderLeftWidth: 'b',
      },
      [MQ.T]: {
        borderLeftWidth: 'c',
      },
      [MQ.M]: {
        borderLeftWidth: 'd',
      },
    });
  });
});
