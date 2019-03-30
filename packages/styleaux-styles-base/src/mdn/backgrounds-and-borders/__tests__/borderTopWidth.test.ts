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

import { borderTopWidth } from '../borderTopWidth';

describe('borderTopWidth', () => {
  it('should return a function', () => {
    const result = borderTopWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderTopWidth` as component and css prop', () => {
    const result = borderTopWidth()({ borderTopWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTopWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopWidth<'a'>()({ borderTopWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderTopWidth: 'a' });
  });

  it('should use an interface which marks `borderTopWidth` as optional', () => {
    const result = borderTopWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderTopWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderTopWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTopWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderTopWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTopWidth: 'a',
      [MQ.D]: {
        borderTopWidth: 'b',
      },
      [MQ.T]: {
        borderTopWidth: 'c',
      },
      [MQ.M]: {
        borderTopWidth: 'd',
      },
    });
  });
});