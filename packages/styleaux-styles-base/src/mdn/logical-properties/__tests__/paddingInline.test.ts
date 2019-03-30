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

import { paddingInline } from '../paddingInline';

describe('paddingInline', () => {
  it('should return a function', () => {
    const result = paddingInline();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingInline` as component and css prop', () => {
    const result = paddingInline()({ paddingInline: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingInline<'a'>()({ paddingInline: 'a' });
    expect(toStyles(result)).toEqual({ paddingInline: 'a' });
  });

  it('should use an interface which marks `paddingInline` as optional', () => {
    const result = paddingInline<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = paddingInline<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingInline: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingInline<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingInline: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingInline: 'a',
      [MQ.D]: {
        paddingInline: 'b',
      },
      [MQ.T]: {
        paddingInline: 'c',
      },
      [MQ.M]: {
        paddingInline: 'd',
      },
    });
  });
});
