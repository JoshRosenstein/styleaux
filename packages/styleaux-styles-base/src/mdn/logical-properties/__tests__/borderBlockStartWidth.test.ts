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

import { borderBlockStartWidth } from '../borderBlockStartWidth';

describe('borderBlockStartWidth', () => {
  it('should return a function', () => {
    const result = borderBlockStartWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStartWidth` as component and css prop', () => {
    const result = borderBlockStartWidth()({ borderBlockStartWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockStartWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStartWidth<'a'>()({ borderBlockStartWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockStartWidth: 'a' });
  });

  it('should use an interface which marks `borderBlockStartWidth` as optional', () => {
    const result = borderBlockStartWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlockStartWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockStartWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockStartWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStartWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockStartWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockStartWidth: 'a',
      [MQ.D]: {
        borderBlockStartWidth: 'b',
      },
      [MQ.T]: {
        borderBlockStartWidth: 'c',
      },
      [MQ.M]: {
        borderBlockStartWidth: 'd',
      },
    });
  });
});
