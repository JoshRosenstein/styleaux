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

import { createBorderColor } from '../borderColor';

describe('borderColor', () => {
  it('should return a function', () => {
    const result = createBorderColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderColor` as component and css prop', () => {
    const result = createBorderColor()({ borderColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderColor<'a'>()({ borderColor: 'a' });
    expect(toStyles(result)).toEqual({ borderColor: 'a' });
  });

  it('should use an interface which marks `borderColor` as optional', () => {
    const result = createBorderColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderColor: 'a',
      [MQ.D]: {
        borderColor: 'b',
      },
      [MQ.T]: {
        borderColor: 'c',
      },
      [MQ.M]: {
        borderColor: 'd',
      },
    });
  });
});
