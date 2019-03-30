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

import { borderImageSlice } from '../borderImageSlice';

describe('borderImageSlice', () => {
  it('should return a function', () => {
    const result = borderImageSlice();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderImageSlice` as component and css prop', () => {
    const result = borderImageSlice()({ borderImageSlice: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageSlice: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageSlice<'a'>()({ borderImageSlice: 'a' });
    expect(toStyles(result)).toEqual({ borderImageSlice: 'a' });
  });

  it('should use an interface which marks `borderImageSlice` as optional', () => {
    const result = borderImageSlice<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderImageSlice<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderImageSlice: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageSlice: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageSlice<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderImageSlice: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImageSlice: 'a',
      [MQ.D]: {
        borderImageSlice: 'b',
      },
      [MQ.T]: {
        borderImageSlice: 'c',
      },
      [MQ.M]: {
        borderImageSlice: 'd',
      },
    });
  });
});
