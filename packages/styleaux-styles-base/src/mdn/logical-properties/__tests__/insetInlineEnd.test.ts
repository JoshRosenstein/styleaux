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

import { createInsetInlineEnd } from '../insetInlineEnd';

describe('insetInlineEnd', () => {
  it('should return a function', () => {
    const result = createInsetInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `insetInlineEnd` as component and css prop', () => {
    const result = createInsetInlineEnd()({ insetInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ insetInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createInsetInlineEnd<'a'>()({ insetInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ insetInlineEnd: 'a' });
  });

  it('should use an interface which marks `insetInlineEnd` as optional', () => {
    const result = createInsetInlineEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createInsetInlineEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ insetInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      insetInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createInsetInlineEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      insetInlineEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      insetInlineEnd: 'a',
      [MQ.D]: {
        insetInlineEnd: 'b',
      },
      [MQ.T]: {
        insetInlineEnd: 'c',
      },
      [MQ.M]: {
        insetInlineEnd: 'd',
      },
    });
  });
});
