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

import { createInlineSize } from '../inlineSize';

describe('inlineSize', () => {
  it('should return a function', () => {
    const result = createInlineSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `inlineSize` as component and css prop', () => {
    const result = createInlineSize()({ inlineSize: 'inherit' });
    expect(toStyles(result)).toEqual({ inlineSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createInlineSize<'a'>()({ inlineSize: 'a' });
    expect(toStyles(result)).toEqual({ inlineSize: 'a' });
  });

  it('should use an interface which marks `inlineSize` as optional', () => {
    const result = createInlineSize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createInlineSize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ inlineSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      inlineSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createInlineSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      inlineSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      inlineSize: 'a',
      [MQ.D]: {
        inlineSize: 'b',
      },
      [MQ.T]: {
        inlineSize: 'c',
      },
      [MQ.M]: {
        inlineSize: 'd',
      },
    });
  });
});
