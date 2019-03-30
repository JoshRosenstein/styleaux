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

import { paddingInlineStart } from '../paddingInlineStart';

describe('paddingInlineStart', () => {
  it('should return a function', () => {
    const result = paddingInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingInlineStart` as component and css prop', () => {
    const result = paddingInlineStart()({ paddingInlineStart: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingInlineStart<'a'>()({ paddingInlineStart: 'a' });
    expect(toStyles(result)).toEqual({ paddingInlineStart: 'a' });
  });

  it('should use an interface which marks `paddingInlineStart` as optional', () => {
    const result = paddingInlineStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = paddingInlineStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingInlineStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingInlineStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingInlineStart: 'a',
      [MQ.D]: {
        paddingInlineStart: 'b',
      },
      [MQ.T]: {
        paddingInlineStart: 'c',
      },
      [MQ.M]: {
        paddingInlineStart: 'd',
      },
    });
  });
});
