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

import { insetInlineStart } from '../insetInlineStart';

describe('insetInlineStart', () => {
  it('should return a function', () => {
    const result = insetInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `insetInlineStart` as component and css prop', () => {
    const result = insetInlineStart()({ insetInlineStart: 'inherit' });
    expect(toStyles(result)).toEqual({ insetInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = insetInlineStart<'a'>()({ insetInlineStart: 'a' });
    expect(toStyles(result)).toEqual({ insetInlineStart: 'a' });
  });

  it('should use an interface which marks `insetInlineStart` as optional', () => {
    const result = insetInlineStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = insetInlineStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ insetInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      insetInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = insetInlineStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      insetInlineStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      insetInlineStart: 'a',
      [MQ.D]: {
        insetInlineStart: 'b',
      },
      [MQ.T]: {
        insetInlineStart: 'c',
      },
      [MQ.M]: {
        insetInlineStart: 'd',
      },
    });
  });
});
