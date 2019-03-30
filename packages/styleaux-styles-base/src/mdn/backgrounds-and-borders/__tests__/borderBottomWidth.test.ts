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

import { borderBottomWidth } from '../borderBottomWidth';

describe('borderBottomWidth', () => {
  it('should return a function', () => {
    const result = borderBottomWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBottomWidth` as component and css prop', () => {
    const result = borderBottomWidth()({ borderBottomWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottomWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomWidth<'a'>()({ borderBottomWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderBottomWidth: 'a' });
  });

  it('should use an interface which marks `borderBottomWidth` as optional', () => {
    const result = borderBottomWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBottomWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottomWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottomWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBottomWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBottomWidth: 'a',
      [MQ.D]: {
        borderBottomWidth: 'b',
      },
      [MQ.T]: {
        borderBottomWidth: 'c',
      },
      [MQ.M]: {
        borderBottomWidth: 'd',
      },
    });
  });
});
