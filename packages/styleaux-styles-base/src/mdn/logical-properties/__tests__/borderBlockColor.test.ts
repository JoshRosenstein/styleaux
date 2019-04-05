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

import { createBorderBlockColor } from '../borderBlockColor';

describe('borderBlockColor', () => {
  it('should return a function', () => {
    const result = createBorderBlockColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockColor` as component and css prop', () => {
    const result = createBorderBlockColor()({ borderBlockColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockColor<'a'>()({ borderBlockColor: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockColor: 'a' });
  });

  it('should use an interface which marks `borderBlockColor` as optional', () => {
    const result = createBorderBlockColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockColor: 'a',
      [MQ.D]: {
        borderBlockColor: 'b',
      },
      [MQ.T]: {
        borderBlockColor: 'c',
      },
      [MQ.M]: {
        borderBlockColor: 'd',
      },
    });
  });
});
