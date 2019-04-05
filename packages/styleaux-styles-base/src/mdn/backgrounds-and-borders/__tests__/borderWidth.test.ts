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

import { createBorderWidth } from '../borderWidth';

describe('borderWidth', () => {
  it('should return a function', () => {
    const result = createBorderWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderWidth` as component and css prop', () => {
    const result = createBorderWidth()({ borderWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderWidth<'a'>()({ borderWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderWidth: 'a' });
  });

  it('should use an interface which marks `borderWidth` as optional', () => {
    const result = createBorderWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderWidth: 'a',
      [MQ.D]: {
        borderWidth: 'b',
      },
      [MQ.T]: {
        borderWidth: 'c',
      },
      [MQ.M]: {
        borderWidth: 'd',
      },
    });
  });
});
