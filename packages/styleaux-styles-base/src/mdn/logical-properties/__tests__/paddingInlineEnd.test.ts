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

import { createPaddingInlineEnd } from '../paddingInlineEnd';

describe('paddingInlineEnd', () => {
  it('should return a function', () => {
    const result = createPaddingInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingInlineEnd` as component and css prop', () => {
    const result = createPaddingInlineEnd()({ paddingInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingInlineEnd<'a'>()({ paddingInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ paddingInlineEnd: 'a' });
  });

  it('should use an interface which marks `paddingInlineEnd` as optional', () => {
    const result = createPaddingInlineEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPaddingInlineEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingInlineEnd<
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
