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

import { paddingInlineEnd } from '../paddingInlineEnd';

describe('paddingInlineEnd', () => {
  it('should return a function', () => {
    const result = paddingInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingInlineEnd` as component and css prop', () => {
    const result = paddingInlineEnd()({ paddingInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingInlineEnd<'a'>()({ paddingInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ paddingInlineEnd: 'a' });
  });

  it('should use an interface which marks `paddingInlineEnd` as optional', () => {
    const result = paddingInlineEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = paddingInlineEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingInlineEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingInlineEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingInlineEnd: 'a',
      [MQ.D]: {
        paddingInlineEnd: 'b',
      },
      [MQ.T]: {
        paddingInlineEnd: 'c',
      },
      [MQ.M]: {
        paddingInlineEnd: 'd',
      },
    });
  });
});
