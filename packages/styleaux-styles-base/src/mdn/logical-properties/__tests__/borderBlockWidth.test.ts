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

import { borderBlockWidth } from '../borderBlockWidth';

describe('borderBlockWidth', () => {
  it('should return a function', () => {
    const result = borderBlockWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockWidth` as component and css prop', () => {
    const result = borderBlockWidth()({ borderBlockWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockWidth<'a'>()({ borderBlockWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockWidth: 'a' });
  });

  it('should use an interface which marks `borderBlockWidth` as optional', () => {
    const result = borderBlockWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlockWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockWidth: 'a',
      [MQ.D]: {
        borderBlockWidth: 'b',
      },
      [MQ.T]: {
        borderBlockWidth: 'c',
      },
      [MQ.M]: {
        borderBlockWidth: 'd',
      },
    });
  });
});
