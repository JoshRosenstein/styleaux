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

import { createBorderBlockWidth } from '../borderBlockWidth';

describe('borderBlockWidth', () => {
  it('should return a function', () => {
    const result = createBorderBlockWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockWidth` as component and css prop', () => {
    const result = createBorderBlockWidth()({ borderBlockWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockWidth<'a'>()({ borderBlockWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockWidth: 'a' });
  });

  it('should use an interface which marks `borderBlockWidth` as optional', () => {
    const result = createBorderBlockWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockWidth<
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
